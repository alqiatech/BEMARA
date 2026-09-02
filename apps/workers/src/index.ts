import { pathToFileURL } from "node:url";

import { featureFlagDefaults, parseServerEnv } from "@bemara/config";
import type { NotificationKind, NotificationPriority } from "@bemara/domain";

export interface WorkerContract {
  queue: string;
  purpose: string;
  sensitivePayloadAllowed: false;
}

export const workerContracts = [
  {
    queue: "notification.prioritize",
    purpose: "Detect, prioritize, contextualize, and schedule Notification Intelligence.",
    sensitivePayloadAllowed: false,
  },
  {
    queue: "life-graph.materialize",
    purpose: "Normalize consented events into Life Graph entities and relationships.",
    sensitivePayloadAllowed: false,
  },
  {
    queue: "lena.action-audit",
    purpose: "Persist action traces without storing sensitive prompt bodies.",
    sensitivePayloadAllowed: false,
  },
] as const satisfies readonly WorkerContract[];

export interface NotificationJob {
  userId: string;
  kind: NotificationKind;
  priority: NotificationPriority;
  reasonCode: string;
}

export function createNotificationJob(job: NotificationJob) {
  return {
    ...job,
    featureEnabled: featureFlagDefaults.notificationIntelligence.enabled,
  };
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  const env = parseServerEnv(process.env);

  console.log(
    JSON.stringify({
      ok: true,
      service: "bemara-workers",
      queues: workerContracts.map((contract) => contract.queue),
      pgBossSchema: env.PG_BOSS_SCHEMA,
    }),
  );
}
