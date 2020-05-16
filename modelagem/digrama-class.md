```mermaid
classDiagram
Hospital --> Paciente
class Hospital{
    +int vagas
    +int ocupados
    +String tipo   
}

class Paciente{
    -String nome
    -String sexo
}
```
