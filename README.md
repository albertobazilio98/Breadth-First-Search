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

#### colorfyB(s)
Função que, pinta os vertices do grafo, seta as distancias e os caminhos, iniciais para ser realizada a busca em largura

#### BFS(s)
Função que realiza a busca em largura, recebe como parametro `s` que representa o indice do vértice em que a busca se iniciara

#### colorfyD()
Função que inicializa as variaveis necessarias para se realizar a busca em profundidade

#### DFS()
Função que realiza a busca em largura, visitando cada vétice não visitado e realizando a busca nele

#### DFS_visit(u)
Função recursiva auxiliar da busca em largura, recebe como parametro um indíce de vértice `u` realiza a busca em cada um de seus vizinhos, se aprofundando em cada um deles de forma recursiva


## Analise

### Busca em profundidade
considerando que cada vértice é enfileirado e desenfileirado uma vez, e que, em cada um desses vértices são verificadas cada uma de suas arestas, pode se afirmar que a busca em largura tem custo 
`Θ(v + e)`
sendo `v` o numero de vertices e `e` o número de arestas do grafo

### Busca em profundidade
Assim como na busca em largura, a busca em profundidade também passa por todos os vértices e arestas de um grafo, porém, na busca em profundidade, a partir de um vértice, verifica-se os filhos dele e não os vizinhos, portanto seu custo também é assintoticamente `Θ(v + e)`