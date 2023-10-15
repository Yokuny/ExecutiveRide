export const titleRegex = RegExp(/^[a-zA-Z0-9\sÀ-ú]{6,}\s*$/);

export const dateRegex = RegExp(/^(202[3-9]|20[3-9]\d)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/);

export const emailRegex = RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);

export const passwordRegex = RegExp(/^[a-zA-Z0-9]{6,}$/);
