# TwitchBot

### Überblick
Dieser TwitchBot ist ein einfacher, aber leistungsfähiger Bot, der auf der Twitch-Plattform eingesetzt werden kann. Er verwendet die @twurple/chat, @twurple/auth und @twurple/easy-bot Bibliotheken, um eine Verbindung zu Twitch herzustellen und Befehle auszuführen.

### Installation
Um diesen Bot zu verwenden, müssen Sie zunächst die notwendigen Abhängigkeiten installieren. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal ausführen:

```
npm install 
```
### Konfiguration
Sie müssen eine .env-Datei in Ihrem Projektverzeichnis erstellen und die folgenden Umgebungsvariablen festlegen:
```
CLIENT_ID=Ihr_Twitch_Client_ID
ACCESS_TOKEN=Ihr_Twitch_Access_Token
CHANNEL_NAME=Ihr_Twitch_Kanalname
```

### Verwendung

Der Bot hat derzeit zwei Befehle:

!dice: Wenn ein Benutzer diesen Befehl im Chat eingibt, würfelt der Bot eine Zahl zwischen 1 und 6 und gibt das Ergebnis aus.

!hi: Wenn ein Benutzer diesen Befehl im Chat eingibt, begrüßt der Bot den angegebenen Benutzer.

Um den Bot zu starten, führen Sie einfach Ihre JavaScript-Datei mit Node.js aus:

```
npm run start
```

### Lizenz
Dieses Projekt steht unter der MIT-Lizenz. Bitte beachten Sie, dass die Verwendung von Bots auf Twitch bestimmte Regeln verletzen kann und möglicherweise gegen die Nutzungsbedingungen von Twitch verstößt. 
Die Verwendung von Bots sollte verantwortungsbewusst und ethisch erfolgen. Für genaue Informationen sollten Sie sich direkt an den Entwickler wenden oder den Code selbst überprüfen.