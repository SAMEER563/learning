import pyautogui
import time
import random
import pyperclip

# ----------------------------
# NEW CONTENT ONLY
# ----------------------------

opening_lines = [
    "🎬 Live Broadcast Starting...",
    "📡 Connecting to Birthday Server...",
    "🧠 Calibrating Fun Levels...",
    "⚙️ Initializing Celebration Engine..."
]

countdown_emojis = ["⏳", "🔥", "💫", "⚡", "🎯", "💥"]

mid_alerts = [
    "🚨 Attention: Handsome mode activated 😏",
    "💃 Too cool to stay calm detected 😎",
    "🍰 Cake security breached!",
    "💖 Warning: Smiles incoming!",
    "🎉 Fun levels rising uncontrollably!"
]

birthday_titles = [
    "👑 ALL HAIL KING DEEPAK 👑",
    "🔥 THE LEGEND DEEPAK 🔥",
    "🎉 BIRTHDAY STAR: DEEPAK 🌟",
    "😎 OFFICIALLY COOLER TODAY: DEEPAK",
    "🚀 DEEPAK HAS ENTERED A NEW LEVEL"
]

sweet_messages = [
    "✨ May today bring peace, joy, and endless smiles",
    "🌈 Wishing you success in everything you chase",
    "💙 Your presence makes life better for people around you",
    "🌟 Another year to grow, glow, and win",
    "🤝 Proud to call you my friend"
]

fireworks = ["🎆", "🎇", "✨", "💥", "🔥", "🎊"]

# ----------------------------
# SAFE SEND FUNCTION
# ----------------------------
def send(text):
    pyperclip.copy(text)
    pyautogui.hotkey("ctrl", "v")
    pyautogui.press("enter")

# ----------------------------
# START SHOW
# ----------------------------
print("🚀 Open WhatsApp and select Deepak's chat NOW!")
time.sleep(6)

# Opening scene
for line in opening_lines:
    send(line)
    time.sleep(0.8)

send("🎯 TARGET LOCKED: DEEPAK")
time.sleep(1)

# ----------------------------
# COUNTDOWN SEQUENCE
# ----------------------------
for i in range(25, -1, -1):
    send(f"{i} {random.choice(countdown_emojis)}")
    time.sleep(0.15)

    if i in [20, 15, 10, 5]:
        send(random.choice(mid_alerts))
        time.sleep(0.7)

# ----------------------------
# IMPACT MOMENT
# ----------------------------
send("💣💣💣 IMPACT 💣💣💣")
time.sleep(1)

send(random.choice(birthday_titles))
time.sleep(1)

send(random.choice(sweet_messages))
time.sleep(1)

# ----------------------------
# FIREWORK SHOW
# ----------------------------
for _ in range(7):
    send(random.choice(fireworks) * random.randint(6, 10))
    time.sleep(0.4)

# ----------------------------
# GRAND ENDING
# ----------------------------
finale = """
🎂🎉💖 HAPPY BIRTHDAY DEEPAK 💖🎉🎂

May this year surprise you,
strengthen you,
and reward you in unexpected ways.
Keep smiling.
Keep moving forward.
The best chapters are still coming. 🚀✨
"""
send(finale)

print("✅ Birthday Countdown Show completed successfully 🎊")

