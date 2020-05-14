



export interface CommonErrorPayload {
    code: string;
    msg: string;
}

export interface TodoGetListReqPayload {
    lastId: number;
}

export interface TodoGetListResPayload {
    datas: TodoData[];
}

export interface TodoAddReqPayload {
    title: string;
    contents: string;
    LastDate: string;
    regDate: string;
    completed: boolean;
    priority: string;
}
export interface TodoAddResPayload {
    id: number;
    title: string;
    contents: string;
    LastDate: string;
    regDate: string;
    completed: boolean;
    priority: string;
}

export interface TodoModifyReqPayload {
    data: TodoData;
}
export interface TodoModifyResPayload {
    id: number;
    title: string;
    contents: string;
    LastDate: string;
    regDate: string;
    completed: boolean;
    priority: string;
}

export type TodoData = {
    id: number,
    title: string,
    contents: string,
    LastDate: string,
    regDate: string,
    completed: boolean,
    priority: string,
};