import api from "./api";

export type T_text = string;
export type T_isCompleted = boolean;
export type T_uuid = string;
// type T_createdAt = Date;
// type T_updatedAt = Date;

const get = async () => {
  const response = await api.get("todos");
  return response.data;
};

export interface IPostPayload {
  text: T_text;
  isCompleted?: T_isCompleted;
}

const post = async (payload: IPostPayload) => {
  const { text, isCompleted } = payload;
  const response = await api.post("todos", {
    text,
    isCompleted: isCompleted || false
  });
  return response.data.ok;
};

export interface IPatchPayload {
  isCompleted: T_isCompleted;
  uuid: T_uuid;
}

const patch = async (payload: IPatchPayload) => {
  const { isCompleted, uuid } = payload;
  const response = await api.patch("todos", { isCompleted, uuid });
  return response.data.ok;
};

export interface IDeletePayload {
  uuid: T_uuid;
}

const _delete = async (payload: IDeletePayload) => {
  const { uuid } = payload;
  const response = await api.delete("todos", { data: { uuid } });
  return response.data.ok;
};

const todos = {
  get,
  post,
  patch,
  delete: _delete
};

export default todos;
