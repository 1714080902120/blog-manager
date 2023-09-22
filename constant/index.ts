export const TOKEN_KEY = `_token`;


export const UPLOAD_MD = 0;
export const UPLOAD_ARTICLE_IMG = 1;
export const UPLOAD_USER_IMG = 2;

export const MD_CONTENT_MAX_LENGTH = 10000 * 10;
export const UPLOAD_SINGLE_FILE_SIZE = 5 * 1024 * 1024;
export const CHUNK_NUM = 8;
export const UPLOAD_FILE_MAX_SIZE = 1024 * 1024 * 100;
export const PER_MB = 1024 * 1024;


export const INTERAL_ERROR_RETURN = {
  success: false,
  rt: "Fail",
  data: null,
  msg: "内部错误",
};

export const ARTICLE_EDITOR_TOOLBARS = [
  "bold",
  "underline",
  "italic",
  "-",
  "title",
  "strikeThrough",
  "sub",
  "sup",
  "quote",
  "unorderedList",
  "orderedList",
  "task",
  "-",
  "codeRow",
  "code",
  "link",
  "image",
  "table",
  "mermaid",
  "katex",
  "-",
  "revoke",
  "next",
  "save",
  "=",
  "pageFullscreen",
  "fullscreen",
  "preview",
  "htmlPreview",
  "catalog",
];

