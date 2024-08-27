/// <reference types="@solidjs/start/env" />

import type { Request as CfRequest, ExecutionContext } from "@cloudflare/workers-types";
import PocketBase from "pocketbase"

export interface CfPagesEnv {
  ASSETS: { fetch: (request: CfRequest) => Promise<Response> };
  CF_PAGES: "1";
  CF_PAGES_BRANCH: string;
  CF_PAGES_COMMIT_SHA: string;
  CF_PAGES_URL: string;

  // Environment variables
  POCKETBASE_URL: string;
  POCKETBASE_EMAIL: string;
  POCKETBASE_PASSWORD: string;
}

declare module "vinxi/http" {
  interface H3EventContext {
    cd: CfRequest["cf"];
    cloudflare: {
      request: CfRequest;
      env: CfPagesEnv;
      context: ExecutionContext;
    };
  }
}

declare module "@solidjs/start/server" {
  interface RequestEventLocals {
    pb: PocketBase;
  }
}