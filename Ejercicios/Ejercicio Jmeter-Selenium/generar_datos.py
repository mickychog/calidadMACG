import csv
from faker import Faker
fake = Faker()

with open('datos.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    for i in range(500):
        carnet = i+1000
        nombres = fake.first_name()
        apellidos = fake.last_name()
        sexo = fake.random_element(elements=('M', 'F'))
        fechaNacimiento = fake.date_of_birth(minimum_age=18, maximum_age=60).strftime("%Y-%m-%d")
        profesion = fake.job()
        celular = fake.msisdn()[:8]
        direccion = fake.address().replace("\n", ", ")
        writer.writerow([carnet, nombres, apellidos, sexo, fechaNacimiento, profesion, celular, direccion])
