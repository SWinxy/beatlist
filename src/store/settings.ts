import { make } from "vuex-pathify";
import { ColorMode } from "@/libraries/app/ColorMode";
import PlaylistFormatType from "@/libraries/playlist/PlaylistFormatType";
import BeatsaverServerUrl from "@/libraries/net/beatsaver/BeatsaverServerUrl";

export interface SettingsStoreState {
  appVersion: string | undefined;
  installationPath: string;
  installationPathValid: boolean;
  darkTheme: boolean;
  enableDiscordRichPresence: boolean;
  defaultExportFormat: PlaylistFormatType;
  beatmapsTable: {
    localBeatmaps: BeatmapTableStoreState;
    beatsaverBeatmaps: BeatmapTableStoreState;
    playlistContent: BeatmapTableStoreState;
    playlistBrowser: BeatmapTableStoreState;
  };
  oneClick: {
    enabled: boolean;
    downloadOnClick: boolean;
  };
  accessibility: {
    showLetterInDifficulty: boolean;
    colorMode: ColorMode;
  };
  beatsaverServerUrl: BeatsaverServerUrl;
}

export interface BeatmapTableStoreState {
  shownColumn: string[];
  itemsPerPage: number;
}

const defaultTableSettings = {
  shownColumn: ["cover", "name", "mapper", "difficulties"],
  itemsPerPage: 10,
};

const state = {
  appVersion: undefined,
  installationPath: "",
  installationPathValid: false,
  darkTheme: true,
  enableDiscordRichPresence: true,
  defaultExportFormat: PlaylistFormatType.Json,
  beatmapsTable: {
    localBeatmaps: { ...defaultTableSettings },
    beatsaverBeatmaps: { ...defaultTableSettings },
    playlistContent: { ...defaultTableSettings },
    playlistBrowser: { ...defaultTableSettings },
    beastsaberPlaylistContent: { ...defaultTableSettings },
  },
  oneClick: {
    enabled: false,
    downloadOnClick: false,
  },
  accessibility: {
    showLetterInDifficulty: false,
    colorMode: ColorMode.None,
  },
  beatsaverServerUrl: BeatsaverServerUrl.Beatsaver,
};

const mutations = {
  ...make.mutations(state),
};

const getters = {
  ...make.getters(state),
  configValid(currentState: SettingsStoreState) {
    return currentState.installationPathValid;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
