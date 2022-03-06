import requests

url = 'https://www.techpowerup.com/cpu-specs/?released=2021&sort=name'
page2021 = requests.get(url)
page2020 = requests.get("https://www.techpowerup.com/cpu-specs/?released=2020&sort=name")
page2019 = requests.get("https://www.techpowerup.com/cpu-specs/?released=2019&sort=name")
page2018 = requests.get("https://www.techpowerup.com/cpu-specs/?released=2018&sort=name")
page2017 = requests.get("https://www.techpowerup.com/cpu-specs/?released=2017&sort=name")

with open  ("p21.html", "w") as f: 
    f.write(page2021.content.decode('utf-8'))

with open  ("p20.html", "w") as f: 
    f.write(page2020.content.decode('utf-8'))

with open  ("p19.html", "w") as f: 
    f.write(page2019.content.decode('utf-8'))

with open  ("p18.html", "w") as f: 
    f.write(page2018.content.decode('utf-8'))

with open  ("p17.html", "w") as f: 
    f.write(page2017.content.decode('utf-8'))

