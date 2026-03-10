# Colas
La naturaleza FIFO (first in, first out) de las colas se debe a que sólo se puede acceder y manipular el elemento inicial. Cuando se agrega un elemento a la cola se conoce como *"enqueue"*, mientras que eliminar un elemento se denomina *"dequeue"*.

Esto hace que el primer elemento en ser añadido a la cola también sea el primero en ser retirado, de ahí su comportamiento FIFO.

{{< figure
    src="images/queues.jpg"
    alt="Diagrama de una cola"
    caption="Diagrama de una cola"
    >}}

## Operaciones principales

Las operaciones básicas de una cola son:

- **Enqueue:** Agrega un elemento al final de la cola.
- **Dequeue:** Saca el elemento del frente de la cola.
- **Peek:** Obtiene el elemento al frente sin sacarlo.
- **isEmpty:** Consulta si la cola está vacía.

## Implementación

Al igual que las pilas, las colas se pueden implementar usando listas enlazadas.
Se agrega al final y se saca del frente manteniendo referencias a ambos extremos.

<!-- {{< codeimporter
    url="https://raw.githubusercontent.com/learn-software-engineering/examples/main/programming/data_structures/queues.py"
    type="python"
    >}} -->

## Ejemplos de uso

Algunos usos comunes de colas:

- Colas de impresión donde primero en entrar, primero en imprimir.
- Colas de tareas en sistemas operativos para orden de ejecución.
- Simulaciones donde se debe respetar orden de llegada como en bancos.
- Canales de mensajes como los de RabbitMQ o Kafka.
- Buffers circulares en audio para streaming.

## Conclusión

Las colas son estructuras versátiles gracias a su principio FIFO. Tener un buen manejo de colas, implementación y aplicaciones reforzará tus habilidades como programador.

---

{{< callout icon="sparkles" >}}
¡Gracias por llegar hasta acá! Espero que este recorrido por el universo de la programación haya sido tan apasionante para vos como lo fue para mí escribirlo.

Nos encantaría escuchar lo que pensás, así que no te quedes callado/a, dejá tus comentarios, sugerencias y todas esas ideas copadas que seguro se te ocurrieron.

Y para ir más allá de estas líneas, date una vuelta por los ejemplos prácticos que preparamos para vos. Vas a encontrar todo el código y los proyectos en nuestro repositorio de GitHub [learn-software-engineering/examples](https://github.com/learn-software-engineering/examples).

¡Gracias por ser parte de esta comunidad de aprendizaje. Seguí programando y explorando nuevos territorios en este fascinante mundo de la computación!
{{< /callout >}}

