# لیستی از دیکشنری‌ها که هر دیکشنری شامل اطلاعات یک کاربر است (شامل جنسیت)

users = [
{"name": "User1", "gender": "non binary", "balance": 1000},
{"name": "User2", "gender": "male", "balance": 1500},
{"name": "User3", "gender": "non binary", "balance": 200},

# ...

]

# فیلتر کردن کاربران با جنسیت non binary

non_binary_users = filter(lambda user: user["gender"] == "non binary", users)

# مپ کردن برای بدست آوردن مقادیر حساب بانکی کاربران non binary

balances = map(lambda user: user["balance"], non_binary_users)

# تبدیل مقادیر به لیست

balance_list = list(balances)

print(balance_list)
