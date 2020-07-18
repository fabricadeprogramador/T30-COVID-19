```mermaid
classDiagram
Hospital --> Paciente
class Hospital{
    +int leitos
    +String tipo
    +Paciente pacientes
}

class Paciente{
    -String nome
    -String sexo
}
```
