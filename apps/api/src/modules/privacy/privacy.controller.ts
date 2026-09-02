import { Controller, Get } from "@nestjs/common";

@Controller("privacy")
export class PrivacyController {
  @Get("foundation")
  foundation() {
    return {
      privacyByDesign: true,
      rights: ["access", "rectification", "cancellation", "opposition", "export", "delete"],
      memoryControls: ["editableMemory", "forgetThis", "temporaryConversation"],
      separation: {
        productAnalytics: "allowlistedNonSensitiveEvents",
        lifeData: "consentedPersonalContext",
      },
      auditRequiredFor: ["consentChange", "memoryDeletion", "dataExport", "lenaSensitiveAction"],
    };
  }
}
