# Breadth-First-Search

## Documentação

### queue

Fila estática usada na implementação do algoritimo de busca em largura

#### insert(elem)
Insere o elemento `elem` no final da fila

#### remove()
Remove o elemento no inicio da fila

#### empty()
Retorna verdadeiro se a fila está vazia

#### head()
Retorna o elemento no inicio da fila


### graph

Classe contendo os elementos de um grafo e os metodos relacionados a busca em largura

#### build()
Cria um grafo aleatório, orientado caso a variavel `digraph` for verdadeira e não orientado caso contrário

#### colorfy(s)
Função que, pinta os vertices do grafo, seta as distancias e os caminhos, iniciais

#### BFS(s)
Função que realiza a busca em largura, recebe como parametro `s` que representa o indice do vértice em que a busca se iniciara

## Analise

considerando que cada vértice é enfileirado e desenfileirado uma vez, e que, em cada um desses vértices são verificadas cada uma de suas arestas, pode se afirmar que a busca em largura tem custo 
`Θ(v + e)`
sendo `v` o numero de vertices e `e` o número de arestas do grafo
