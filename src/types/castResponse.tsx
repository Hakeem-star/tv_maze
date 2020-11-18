import { error } from "./error";

export type castResponse = {
  person: {
    id: number;
    url: string;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    birthday: string;
    deathday: null | string;
    gender: string;
    image: {
      medium: string;
      original: string;
    };
    _links: {
      self: {
        href: string;
      };
    };
  };
  character: {
    id: number;
    url: string;
    name: string;
    image: null;
    _links: {
      self: {
        href: string;
      };
    };
  };
  self: boolean;
  voice: boolean;
}[];
