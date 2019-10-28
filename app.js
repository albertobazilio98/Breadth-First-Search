class graph {
  constructor(e) {
    this.edges = e;
    this.color = new Array(e);
    this.distance = new Array(e);
    this.pi = new Array(e);
    this.adj = new Array(e);
    for (var i = 0; i < e; i++) {
      this.adj[i] = new Array(e);
    }
    this.build();
  }
  build() {
    for (var i = 0; i < this.edges; i++) {
      for (var j = 0; j < this.edges; j++) {
        this.adj[i][j] = Math.round(Math.random());
      }
    }
    this.colorfy(this);
  }
  colorfy() {
    for(var i = 0; i < this.edges; i++) {
      this.color[i] = 'w';
      this.distance[i] = Infinity;
      this.pi[i] = null;
    }
  }
}

class queue {
  constructor(e) {
    this.elems = new Array(e);
    this.start = 0;
    this.end = -1;
  }
  insert(elem) {
    this.end++;
    this.elems[end] = elem;
  }
  remove() {
    this.start++;
    return this.elems[this.start]
  }
  empty() {
    return this.end < this.start;
  }
}


