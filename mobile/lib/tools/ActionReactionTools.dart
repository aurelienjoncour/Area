import 'dart:developer';

import 'package:mobile/api/model/area/ActionType.dart';
import 'package:mobile/api/model/area/ReactionType.dart';
import 'package:mobile/service/IService.dart';
import 'package:mobile/service/date.dart';
import 'package:mobile/service/discord.dart';
import 'package:mobile/service/dropbox.dart';
import 'package:mobile/service/github.dart';
import 'package:mobile/service/linkedin.dart';
import 'package:mobile/service/notion.dart';
import 'package:mobile/service/rss.dart';
import 'package:mobile/service/twitch.dart';
import 'package:mobile/service/twitter.dart';
import 'package:mobile/service/unsplash.dart';

ActionType getActionTypeByDescr(String desc) {
  Map<String, ActionType> map = {
    'Date': ActionType.DATE,
    'Date time': ActionType.DATETIME,
    'New stream started': ActionType.TWITCH_STREAM,
    'On new tweet': ActionType.TWITTER_MSG,
    'Rss entry': ActionType.RSS_ENTRY,
    'New Issue': ActionType.GITHUB_ISSUE,
    'New Pull Request': ActionType.GITHUB_PULL_REQ,
    'New message on group': ActionType.DISCORD_MSG,
    'Unsplash post': ActionType.UNSPLASH_POST,
  };
  log(desc);
  return map[desc]!;
}

ReactionType getReactionTypeByDescr(String desc) {
  Map<String, ReactionType> map = {
    'Make a tweet': ReactionType.TWITTER_MSG,
    'Change Banner': ReactionType.TWITTER_BANNER,
    'Update profile image': ReactionType.TWITTER_PP,
    'Publish post': ReactionType.LINKEDIN_MSG,
    'Send message': ReactionType.DISCORD_MSG,
    'Create new Issue': ReactionType.GITHUB_ISSUE,
    'Update Notion Database': ReactionType.NOTION_MSG,
    "Upload file": ReactionType.DROPBOX_UPLOAD,
    "Unsplash": ReactionType.UNSPLASH,
  };
  return map[desc]!;
}

IService getServiceActionName(ActionType act) {
  Map<ActionType, IService> map = {
    ActionType.DATE: date(false),
    ActionType.DATETIME: date(false),
    ActionType.TWITCH_STREAM: twitch(false),
    ActionType.TWITTER_MSG: twitter(false),
    ActionType.RSS_ENTRY: rss(false),
    ActionType.GITHUB_ISSUE: github(false),
    ActionType.GITHUB_PULL_REQ: github(false),
    ActionType.DISCORD_MSG: discord(false),
    ActionType.UNSPLASH_POST: unsplash(false),
  };
  return map[act]!;
}

IService getServiceReactionName(ReactionType act) {
  Map<ReactionType, IService> map = {
    ReactionType.TWITTER_MSG: twitter(false),
    ReactionType.TWITTER_BANNER: twitter(false),
    ReactionType.TWITTER_PP: twitter(false),
    ReactionType.LINKEDIN_MSG: linkedin(false),
    ReactionType.DISCORD_MSG: discord(false),
    ReactionType.GITHUB_ISSUE: github(false),
    ReactionType.NOTION_MSG: notion(false),
    ReactionType.DROPBOX_UPLOAD: dropbox(false),
    ReactionType.UNSPLASH: unsplash(false),
  };
  return map[act]!;
}