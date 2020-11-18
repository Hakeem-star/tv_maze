import { error } from "./error";
import { showResponse } from "./showResponse";

export type scheduleResponse =
  | {
      id: number;
      url: string;
      name: string;
      season: number;
      number: number;
      type: string;
      airdate: string;
      airtime: string;
      airstamp: string;
      runtime: number;
      image: { medium: string; original: string };
      summary: string | null;
      show: showResponse;
      _links: {
        self: {
          href: string;
        };
      };
    }[]
  | error;
