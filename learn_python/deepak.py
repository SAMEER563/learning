import pyautogui 
import time
import random
import sys
import pyperclip  # pip install pyperclip

# --- Funny gifts, jokes, and beautiful messages ---
gifts = ["Unlimited pizza 🍕", "Extra sleep 😴", "Magical swag 😎", "Endless laughter 😂", "Girls distraction alert 😏💘"]
jokes = [
    "Warning: Charm overload today! 😎💘",
    "Caution: May fall for every girl he sees 😏💌",
    "Birthday level: LEGENDARY 🏆",
    "Achievement unlocked: Birthday Boss 🥳"
]
beautiful_messages = [
    "May your birthday be as amazing and brilliant as you are! 🌟💖",
    "Wishing you endless happiness, laughter, and love today and always! 🎂💫",
    "Another year older, wiser, and cooler! Keep shining, Deepak! 😎✨",
    "Your friendship is a treasure — hope your birthday is just as precious! 💎🎉"
]

# --- Fun variations of the main birthday line ---
birthday_lines = [
    "🎂 Happy Birthday Deepak! 🎈",
    "🎉 HBD Deepak! Time to party! 🥳",
    "🎊 Deepak's Birthday Bash is ON! 🎂💖",
    "🥳 Wishing the legendary Deepak a fantastic Birthday! 🎁",
    "🎂🎉 Another year of awesomeness for Deepak! 🌟"
]

# --- Animated Loading Function ---
def loading_animation():
    print("Initializing Birthday Bomb for Deepak 🚀", end="")
    for i in range(5):
        sys.stdout.write(".")
        sys.stdout.flush()
        time.sleep(0.5)
    print(" Done! 🎉\n")

# --- Clipboard Send Function for emojis ---
def send_message(message):
    pyperclip.copy(message)          # Copy message to clipboard
    pyautogui.hotkey("ctrl", "v")    # Paste in WhatsApp
    pyautogui.press("enter")         # Send

# --- Instructions ---
print("🚀 Open WhatsApp and select Deepak's chat now...")
time.sleep(5)

loading_animation()

# --- Send Multiple Funny + Beautiful Messages ---
for i in range(6):
    gift_today = random.choice(gifts)
    joke_today = random.choice(jokes)
    beautiful_today = random.choice(beautiful_messages)
    birthday_line = random.choice(birthday_lines)  # Random birthday line each time
    
    message = f"""
{birthday_line}
{joke_today}
{beautiful_today}
Today's gift: {gift_today} 🎁
"""
    send_message(message)
    time.sleep(random.randint(2, 5))

# --- Surprise Emoji Explosion ---
emojis = ["🎉", "💥", "🎂", "🔥", "💖", "😜"]
for _ in range(5):
    send_message(random.choice(emojis)*5)
    time.sleep(0.5)

# --- Grand Final Message ---
final_message = """
🎊🎉🎂💖 SURPRISE DEEPAK! 💖🎂🎉🎊
May your birthday be full of laughter, love, and unforgettable memories! 😎✨
Keep shining and being awesome! 🚀💥
"""
send_message(final_message)

print("🎊 All birthday messages sent! Deepak got the full Birthday Bomb! 💣🎉")
