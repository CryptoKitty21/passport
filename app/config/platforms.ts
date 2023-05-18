import { PLATFORM_ID } from "@gitcoin/passport-types";
import {
  Brightid,
  Coinbase,
  Discord,
  Ens,
  ETH,
  Facebook,
  Gitcoin,
  Github,
  GitPOAP,
  GnosisSafe,
  Google,
  GTC,
  GtcStaking,
  GuildXYZ,
  Lens,
  Linkedin,
  NFT,
  POAP,
  Poh,
  Snapshot,
  Twitter,
  ZkSync,
} from "@gitcoin/passport-platforms";

export type PlatformSpec = {
  icon?: string | undefined;
  platform: PLATFORM_ID;
  name: string;
  description: string;
  connectMessage: string;
  isEVM?: boolean;
};

export const getPlatformSpec = (platformName: string): PlatformSpec | undefined => {
  let platformspec: PlatformSpec | undefined = undefined;
  PLATFORMS.forEach((platform) => {
    if (platform.platform === platformName) {
      platformspec = platform;
    }
  });
  return platformspec;
};

export const PLATFORMS: PlatformSpec[] = [
  GTC.GTCPlatformDetails,
  GtcStaking.GTCStakingPlatformDetails,
  Gitcoin.gitcoinPlatformDetails,
  Twitter.TwitterPlatformDetails,
  Discord.DiscordPlatformDetails,
  Google.GooglePlatformDetails,
  Github.GithubPlatformDetails,
  Facebook.FacebookPlatformDetails,
  Linkedin.LinkedinPlatformDetails,
  Ens.EnsPlatformDetails,
  POAP.POAPPlatformDetails,
  Brightid.BrightidPlatformDetails,
  Poh.PohPlatformDetails,
  ETH.ETHPlatformDetails,
  Snapshot.SnapshotPlatformDetails,
  GitPOAP.GitPOAPPlatformDetails,
  NFT.NFTPlatformDetails,
  ZkSync.ZkSyncPlatformDetails,
  Lens.LensPlatformDetails,
  GnosisSafe.GnosisSafePlatformDetails,
  Coinbase.CoinbasePlatformDetails,
  GuildXYZ.GuildXYZPlatformDetails,
  // Signer.SignerPlatformDetails,
];
