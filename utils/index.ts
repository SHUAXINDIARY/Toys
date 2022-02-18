type ReqProps = {
  url: string;
  opts?: RequestInit;
};

const req = async <Res = any>({ url, opts }: ReqProps): Promise<Res> => {
  try {
    const _res = await fetch(url, { ...opts });
    return await _res.json();
  } catch (error: any) {
    return error;
  }
};

const isPlainObj = (obj: any) => {
  if (!obj || Array.isArray(obj) || typeof obj !== "object") {
    return false;
  }
  return true;
};

const isNullObj = (obj: { [key: string]: any }) => {
  if (!obj) {
    return false;
  }
  return Object.keys(obj).length === 0;
};

const _ = {
  req,
  isPlainObj,
  isNullObj,
};

export default _;
