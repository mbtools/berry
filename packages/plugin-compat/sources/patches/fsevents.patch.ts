let patch: string;

export function getPatch() {
  if (typeof patch === `undefined`)
    patch = require(`zlib`)
      .brotliDecompressSync(
        Buffer.from(
          `G7weAByFTVk3Vs7UfHhq4yykgEM7pbW7TI43SG2S5tvGrwHBAzdz+s/npQ6tgEvobvxisrPIadkXeUAJotBn5bDZ5kAhcRqsIHe3F75Walet5hNalwgFDtxb0BiDUjiUQkjG0yW2hto9HPgiCkm316d6bC0kST72YN7D7rfkhCE9x4J0XwB0yavalxpUu2t9xszHrmtwalOxT7VslsxWcB1qpqZwERUra4psWhTV8BgwWeizurec82Caf1ABL11YMfbf8FJ9JBceZOkgmvrQPbC9DUldX/yMbmX06UQluCEjSwUoyO+EZPIjofr+/oAZUck2enraRD+oWLlnlYnj8xB+gwSo9lmmks4fXv574qSqcWA6z21uYkzMu3EWj+K23RxeQlLqiE35/rC8GcS4CGkKHKKq+zAIQwD9iRDNfiAqueLLpicFFrNsAI4zeTD/eO9MHcnRa5m8UT+M2+V+AkFST4BlKneiAQRSdST8KEAIyFlULt6wa9EBd0Ds28VmpaxquJdVt+nwdEs5xUskI13OVtFyY0UrQIRAlCuvvWivvlSKQfTO+2Q8OyUR1W5RvetaPz4jD27hdtwHFFA1Ptx6Ee/t2cY2rg2G46M1pNDRf2pWhvpy8pqMnuI3++4OF3+7OFIWXGjh+o7Nr2jNvbiYcQdQS1h903/jVFgOpA0yJ78z+x759bFA0rq+6aY5qPB4FzS3oYoLupDUhD9nDz6F6H7hpnlMf18KNKDu4IKjTWwrAnY6MFQw1W6ymOALHlFyCZmQhldg1MQHaMVVQTVgDC60TfaBqG++Y8PEoFhN/PBTZT175KNP/BlHDYGOOBmnBdzqJKplZ/ljiVG0ZBzfqeBRrrUkn6rA54462SgiliKoYVnbeptMdXNfAuaupIEi0bApF10TlgHfmEJAPUVidRVFyDupSem5po5vErPqWKhKbUIp0LozpYsIKK57dM/HKr+nguF+7924IIWMICkQ8JUigs9D+W+c4LnNoRtPPKNRUiCYmP+Jfo2lfKCKw8qpraEeWU3uiNRO6zcyKQoXPR5htmzzLznke7b4YbXW3I1lIRzmgG02Udb58U+7TpwyN7XymCgH+wuPDthZVQvRZuEP+SnLtMicz9m5zASWOBiAcLmkuFlTKuHspSIhCBD0yUPKcxu81A+4YD78rA2vtwsUEday9WNyrShyrl60rWmA+SmbYZkQOwFJWArxRYYc5jGhA5ikxYw1rx3ei4NmeX/lKiwpZ9Ln1tV2Ae7sArvxuVLbJjqJRjW1vFXAyHpvLG+8MJ6T2Ubx5M2KDa2SN6vuIGxJ9WQM9Mk3Q7aCNiZONXllhqq24DmoLbQfW2rYWsOgHWjtOmIQMyMKdiHZDjoyIq5+U700nZ6odJAoYXPQBvFNiQ78d5jaXliBqLTJEqUCwi+LiH2mx92EmNKDsJL74Z613+3lf20pxkV1+erOrjj8pW00vsPaahKUM+05ssd5uwM7K482KWEf3TCwlg/o3e5ngto7qSMz7YteIgCsF1UOcsLk7F7MxWbvrPMY473ew0G+noVL8EPbkmEMftMSeL6HFub/zy+2JQ==`,
          `base64`,
        ),
      )
      .toString();

  return patch;
}
