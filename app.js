class queue {
  constructor(e) {
    this.elems = new Array(e);
    this.start = 0;
    this.end = -1;
  }
  insert(elem) {
    this.end++;
    this.elems[this.end] = elem;
  }
  remove() {
    this.start++;
  }
  empty() {
    return (this.end < this.start);
  }
  head() {
    return this.elems[this.start];
  }
}

class graph {
  constructor(v, digraph) {
    this.vertices = v;
    this.color = new Array(v);
    this.distance = new Array(v);
    this.pi = new Array(v);
    this.adj = new Array(v);
    this.Q = new queue(v);
    this.digraph = digraph;
    for (var i = 0; i < v; i++) {
      this.adj[i] = new Array(v);
    }
    this.build();
  }
  build() {
    if (this.digraph) {
      for (var i = 0; i < this.vertices; i++) {
        for (var j = 0; j < this.vertices; j++) {
          this.adj[i][j] = Math.round(Math.random());
        }
      }
    } else {
      for (var i = 0; i < this.vertices; i++) {
        this.adj[i][i] = 0;
        for (var j = 0; j < i; j++) {
          this.adj[i][j] = Math.round(Math.random());
          this.adj[j][i] = this.adj[i][j];
        }
      }
    }
    console.log(this.adj)
  }
  colorfy(s) {
    for(var i = 0; i < this.vertices; i++) {
      this.color[i] = 'w';
      this.distance[i] = Infinity;
      this.pi[i] = null;
    }
    this.color[s] = 'g';
    this.distance[s] = 0;

  }
  BFS(s) {
    this.colorfy(s);
    this.Q.insert(s);
    while(!this.Q.empty()) {
      var u = this.Q.head();
      for (var i = 0; i < this.vertices; i++) {
        if (this.adj[u][i] == 1 && this.color[i] == 'w') {
          this.color[i] = 'g';
          this.distance[i] = this.distance[u] + 1;
          this.pi[i] = u;
          this.Q.insert(i);
        }
      }
      this.Q.remove();
      this.color[u] = 'b';
    }
    console.log("Cores", this.color);
    console.log("Distancia", this.distance);
    console.log("Pi", this.pi);
  }
}

