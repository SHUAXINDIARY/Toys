type ReqProps = {
  url: string;
  opts?: RequestInit;
}

const req = async ({ url, opts }: ReqProps) => {
  try {
    const _res = await fetch(url, { ...opts });
    return await _res.json();
  } catch (error) {
    return {
      code: 0,
      error,
    };
  }
};

const _ = {
  req,
};

export default _;
