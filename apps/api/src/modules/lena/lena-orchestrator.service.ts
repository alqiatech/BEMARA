import { Injectable } from "@nestjs/common";

import type { LenaActionProposal, LenaConversationMode } from "@bemara/domain";
import { assessLenaAction } from "@bemara/safety";

export interface LenaFoundationContract {
  visibleName: "LENA";
  conversationModes: LenaConversationMode[];
  memoryPolicy: {
    temporaryMode: "noPersonalMemory";
    editableMemory: true;
    forgetAction: true;
  };
  autonomyLevels: ["suggest", "prepare", "executeWithRules"];
  directProviderAccessFromFrontend: false;
}

@Injectable()
export class LenaOrchestratorService {
  getFoundation(): LenaFoundationContract {
    return {
      visibleName: "LENA",
      conversationModes: ["listen", "understand", "perspective", "decide", "act", "temporary"],
      memoryPolicy: {
        temporaryMode: "noPersonalMemory",
        editableMemory: true,
        forgetAction: true,
      },
      autonomyLevels: ["suggest", "prepare", "executeWithRules"],
      directProviderAccessFromFrontend: false,
    };
  }

  assessAction(action: LenaActionProposal) {
    return assessLenaAction(action);
  }
}
