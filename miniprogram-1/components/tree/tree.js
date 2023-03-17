// components/tree/tree.js
const tranverse = (e) => {
  for (let i in e) {
    if (e[i].nodes) {
      e[i].open = false;
      tranverse(e[i].nodes)
    }
    e[i].selected = false;
  }
}
Component({
  properties: {
    treeList: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        this.updateRate(newVal)
      }
    },
    depth: {
      type: Number,
      value: 0
    }
  },
  data: {},

  methods: {
    //修改折叠状态
    changeOpen(tree, id) {
      for (let i = 0; i < tree.length; i += 1) {
        tree[i].color = ''
        if(tree[i].id == id){
          tree[i].color = "linear-gradient(to left bottom,#f5eee3,#fda7ae)"
        }
        if (tree[i].id === id) {
          tree[i].open = !tree[i].open;
        }
        if (tree[i].nodes.length !== 0) {
          this.changeOpen(tree[i].nodes, id);
        }
      }
      return;
    },
    onchange(e) {
      const {
        treeList
      } = this.data;
      const {
        id
      } = e.currentTarget.dataset;
      this.changeOpen(treeList, id);
      this.triggerEvent('change', id, {
        bubbles: true,
        composed: true
      });
      this.setData({
        tree: treeList
      })
    },
    change(e) {
      const id = e.detail;
      const {
        treeList
      } = this.data;
      this.changeOpen(treeList, id);
      this.setData({
        tree: treeList
      })
    },
    click(e) {
      const t = this.selectAllComponents('#treeSelect');
      t.forEach(item => {
        item.click(e);
      })
      let id = '';
      if (e.detail) {
        id = e.detail.id;
      }
      const {
        treeList
      } = this.data;
      this.setStatus(treeList, id);
      this.setData({
        tree: treeList
      })
    },
    handleClick(e) {
      const t = this.selectAllComponents('#treeSelect');
      t.forEach(item => {
        item.click(e);
      })
      //   const {id}=e.currentTarget.dataset;
      const {
        id,
        value
      } = e.currentTarget.dataset;
      const {
        treeList
      } = this.data;
      // const value = this.getData(treeList, id)
      this.setStatus(treeList, id);
      this.triggerEvent('onclick', {
        id,
        value,
        treeList
      }, {
        composed: true,
        bubbles: true
      });
      this.setData({
        tree: treeList
      })
    },
    //切换选中状态
    setStatus(tree, id) {
      for (let i = 0; i < tree.length; i += 1) {
        if (tree[i].id == id) {
          tree[i].selected = true;
        } else {
          tree[i].selected = false;
        }
        if (tree[i].nodes) {
          this.setStatus(tree[i].nodes, id);
        }
      }
      return;
    },
    //获取选中项信息
    getData(tree, id) {
      console.log(1);
      for (let i = 0; i < tree.length; i += 1) {
        if (tree[i].id === id) {
          return tree[i].name;
        }
        if (tree[i].nodes) {
          this.getData(tree[i].nodes, id);
        }
      }
      return '';
    },
    ready() {
      // const {treeList}=this.properties; 
      const {treeList} = this.data;
      for (let i in treeList) {
        if (treeList[i].nodes.length != 0) {
          treeList[i].open = false;
          tranverse(treeList[i].nodes);
        }
        treeList[i].selected = false;
      }
      this.setData({
        tree: treeList
      })
    },
    updateRate(newVal) {
      this.setData({
        treeList: newVal
      })
      this.ready()
    }
  },
  lifetimes: {
    attached: function () {
      this.ready()
    }
  }
})