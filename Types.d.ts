export type GenericMeta =
  {
    // ???
  };

export type BareHeaders = Map<string, string | string[]>;

export type SmallResponse =
  {
    body: ReadableStream | ArrayBuffer | Blob | string,
    headers: BareHeaders,
    status: number
  }

export interface BareClient {
  connect: (
    url: URL,
    protocols: [string],
    onopen: () => void,
    onmessage: (data: ArrayBuffer | string) => void,
    onclose: (code: number, reason: string) => void,
    onerror: (error: string) => void,
  ) => (data) => void;

  // somethingforwebtransportsidk: (???)=>???

  request: (
    remote: URL,
    method: string,
    body: BodyInit | null,
    headers: BareHeaders,
    signal: AbortSignal | undefined
  ) => Promise<SmallResponse>;

  meta: () => GenericMeta
}
