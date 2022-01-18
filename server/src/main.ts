import "module-alias/register";

import Database from "./init/database";
import Express from "./init/express";
import DiscordService from "./services/DiscordService";

DiscordService.connect();
Express.connect();
Database.connect();
import { CronService } from "./services/CronService";

// Action cron job
new CronService();