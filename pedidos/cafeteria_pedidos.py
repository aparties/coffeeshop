# Script de Pedidos de Café y Postres

# Menú de la cafetería
menu = {
    "café": {
        "americano": 2.50,
        "latte": 3.00,
        "cappuccino": 3.50,
        "espresso": 2.00,
        "mocha": 3.75
    },
    "postres": {
        "tarta de queso": 4.00,
        "brownie": 3.00,
        "flan": 2.50,
        "muffin": 2.75,
        "croissant": 2.25
    }
}

# Función para mostrar el menú
def mostrar_menu():
    print("Bienvenido a nuestra cafetería. Aquí está nuestro menú:")
    for categoria, items in menu.items():
        print(f"\n{categoria.capitalize()}:")
        for item, precio in items.items():
            print(f"  {item.capitalize()} - ${precio:.2f}")

# Función para tomar el pedido
def tomar_pedido():
    pedido = {}
    for categoria in menu.keys():
        print(f"\n¿Qué {categoria} te gustaría ordenar? (escribe 'no' para omitir)")
        for item in menu[categoria].keys():
            cantidad = input(f"Cantidad de {item}: ")
            if cantidad.lower() == 'no':
                break
            try:
                cantidad = int(cantidad)
                if cantidad > 0:
                    pedido[item] = cantidad
            except ValueError:
                print("Por favor, introduce un número válido.")
    return pedido

# Función para calcular el total
def calcular_total(pedido):
    total = 0
    for item, cantidad in pedido.items():
        for categoria in menu.values():
            if item in categoria:
                total += categoria[item] * cantidad
                break
    return total

# Función principal
def main():
    mostrar_menu()
    pedido = tomar_pedido()
    if pedido:
        total = calcular_total(pedido)
        print("\nResumen de tu pedido:")
        for item, cantidad in pedido.items():
            print(f"  {cantidad} x {item.capitalize()}")
        print(f"\nTotal a pagar: ${total:.2f}")
    else:
        print("No has realizado ningún pedido. ¡Esperamos verte pronto!")

if __name__ == "__main__":
    main()