import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-4WXVOEFY.js";

// node_modules/@softarc/native-federation-runtime/fesm2022/softarc-native-federation-runtime.mjs
function mergeImportMaps(map1, map2) {
  return {
    imports: __spreadValues(__spreadValues({}, map1.imports), map2.imports),
    scopes: __spreadValues(__spreadValues({}, map1.scopes), map2.scopes)
  };
}
var externals = /* @__PURE__ */ new Map();
function getExternalKey(shared) {
  return `${shared.packageName}@${shared.version}`;
}
function getExternalUrl(shared) {
  const packageKey = getExternalKey(shared);
  return externals.get(packageKey);
}
function setExternalUrl(shared, url) {
  const packageKey = getExternalKey(shared);
  externals.set(packageKey, url);
}
function getDirectory(url) {
  const parts = url.split("/");
  parts.pop();
  return parts.join("/");
}
function joinPaths(path1, path2) {
  while (path1.endsWith("/")) {
    path1 = path1.substring(0, path1.length - 1);
  }
  if (path2.startsWith("./")) {
    path2 = path2.substring(2, path2.length);
  }
  return `${path1}/${path2}`;
}
var remoteNamesToRemote = /* @__PURE__ */ new Map();
var baseUrlToRemoteNames = /* @__PURE__ */ new Map();
function addRemote(remoteName, remote) {
  remoteNamesToRemote.set(remoteName, remote);
  baseUrlToRemoteNames.set(remote.baseUrl, remoteName);
}
function appendImportMap(importMap) {
  document.body.appendChild(Object.assign(document.createElement("script"), {
    type: "importmap-shim",
    innerHTML: JSON.stringify(importMap)
  }));
}
function initFederation() {
  return __async(this, arguments, function* (remotesOrManifestUrl = {}) {
    const remotes = typeof remotesOrManifestUrl === "string" ? yield loadManifest(remotesOrManifestUrl) : remotesOrManifestUrl;
    const hostImportMap = yield processHostInfo();
    const remotesImportMap = yield processRemoteInfos(remotes);
    const importMap = mergeImportMaps(hostImportMap, remotesImportMap);
    appendImportMap(importMap);
    return importMap;
  });
}
function loadManifest(remotes) {
  return __async(this, null, function* () {
    return yield fetch(remotes).then((r) => r.json());
  });
}
function processRemoteInfos(remotes) {
  return __async(this, null, function* () {
    let importMap = {
      imports: {},
      scopes: {}
    };
    for (const remoteName of Object.keys(remotes)) {
      try {
        const url = remotes[remoteName];
        const remoteMap = yield processRemoteInfo(url, remoteName);
        importMap = mergeImportMaps(importMap, remoteMap);
      } catch (e) {
        console.error(`Error loading remote entry for ${remoteName} from file ${remotes[remoteName]}`);
      }
    }
    return importMap;
  });
}
function processRemoteInfo(federationInfoUrl, remoteName) {
  return __async(this, null, function* () {
    const baseUrl = getDirectory(federationInfoUrl);
    const remoteInfo = yield loadFederationInfo(federationInfoUrl);
    if (!remoteName) {
      remoteName = remoteInfo.name;
    }
    const importMap = createRemoteImportMap(remoteInfo, remoteName, baseUrl);
    addRemote(remoteName, __spreadProps(__spreadValues({}, remoteInfo), { baseUrl }));
    return importMap;
  });
}
function createRemoteImportMap(remoteInfo, remoteName, baseUrl) {
  const imports = processExposed(remoteInfo, remoteName, baseUrl);
  const scopes = processRemoteImports(remoteInfo, baseUrl);
  return { imports, scopes };
}
function loadFederationInfo(url) {
  return __async(this, null, function* () {
    const info = yield fetch(url).then((r) => r.json());
    return info;
  });
}
function processRemoteImports(remoteInfo, baseUrl) {
  const scopes = {};
  const scopedImports = {};
  for (const shared of remoteInfo.shared) {
    const outFileName = getExternalUrl(shared) ?? joinPaths(baseUrl, shared.outFileName);
    setExternalUrl(shared, outFileName);
    scopedImports[shared.packageName] = outFileName;
  }
  scopes[baseUrl + "/"] = scopedImports;
  return scopes;
}
function processExposed(remoteInfo, remoteName, baseUrl) {
  const imports = {};
  for (const exposed of remoteInfo.exposes) {
    const key = joinPaths(remoteName, exposed.key);
    const value = joinPaths(baseUrl, exposed.outFileName);
    imports[key] = value;
  }
  return imports;
}
function processHostInfo() {
  return __async(this, null, function* () {
    const hostInfo = yield loadFederationInfo("./remoteEntry.json");
    const imports = hostInfo.shared.reduce((acc, cur) => __spreadProps(__spreadValues({}, acc), { [cur.packageName]: "./" + cur.outFileName }), {});
    for (const shared of hostInfo.shared) {
      setExternalUrl(shared, "./" + shared.outFileName);
    }
    return { imports, scopes: {} };
  });
}

// src/main.ts
initFederation().catch((err) => console.error(err)).then((_) => import("./chunk-OSN2OLK2.js")).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
