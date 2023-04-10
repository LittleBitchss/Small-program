// components/chefRegister_gang/gang.js
const app = getApp()
import F6 from '@antv/f6-wx';
import force from '@antv/f6-wx/extends/layout/forceLayout';
import TreeGraph from '@antv/f6-wx/extends/graph/treeGraph';
const data = {
  id: 'root',
  children: [{
      id: 'subTree1',
      img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
      children: [{
          id: '相关方可',
          img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
        },
        {
          id: '财务测',
          img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
          children: [{
              id: 'NPV：项',
              img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
            },
            {
              id: 'ROI：投',
              img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
            },
            {
              id: 'IRR：内',
              img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
              children: [{
                  id: '1',
                  img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
                },
                {
                  id: 'R2',
                  img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
                },
                {
                  id: 'IR3',
                  img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
                  children: [{
                      id: '11',
                      img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
                    },
                    {
                      id: 'R21',
                      img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
                    },
                    {
                      id: 'IR31',
                      img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
                    },
                  ],
                },
              ],
            },
          ],
        }
      ],
    },
    {
      id: 'subTree2',
      img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
      children: [{
          id: '111',
          img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
        },
        {
          id: 'R211',
          img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
        },
        {
          id: 'IR311',
          img:'https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg',
        },
      ],
    }
  ]
};
Component({
  /**
   * 组件的属性列表
   */
  canvas: null,
  ctx: null,
  renderer: '', // mini、mini-native等，F6需要，标记环境
  graph: null,
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    width: 375,
    height: 600,
    pixelRatio: 1,
    forceMini: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCanvasInit(event) {
      const {
        ctx,
        canvas,
        renderer
      } = event.detail;
      this.isCanvasInit = true;
      this.ctx = ctx;
      this.renderer = renderer;
      this.canvas = canvas;
      this.updateChart();
    },

    /**
     * canvas派发的事件，转派给graph实例
     */
    handleTouch(e) {
      this.graph && this.graph.emitEvent(e.detail);
    },
    updateChart() {
      const {
        width,
        height,
        pixelRatio
      } = this.data;

      this.graph = new F6.TreeGraph({
        context: this.ctx,
        renderer: this.renderer,
        width,
        height,
        pixelRatio,
        modes: {
          default: [{
              type: 'collapse-expand',
              onChange: function onChange(item, collapsed) {
                const model = item.getModel();
                model.collapsed = collapsed;
                return true;
              },
            },
            'drag-canvas',
            'zoom-canvas',
          ],
        },
        defaultNode: {
          type: 'circle',
          size: 80,
          label: 'AntV Team',
          labelCfg: {
            position: 'right',
            style: {
              fontSize: 20
            }
          },
          
          anchorPoints: [
            [0.5, 1],
            [0, 0.5],
          ],
          // 裁剪图片配置
          clipCfg: {
            show: false,
            type: 'circle',
            r: 15
          }
        },
        defaultEdge: {
          type: 'polyline',
          style: {
            stroke: 'green',
            endArrow: true
            // offset: 8
          },
        },
        layout: {
          type: 'indented',
          direction: 'LR',
          indent: 100,
          nodeSep: 100,
          rankSep: 100,
          getId: function getId(d) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 40;
          },
          getVGap: function getVGap() {
            return 30;
          },
        },
      });
      this.graph.on('itemcollapsed', (e) => {
        // 当前被操作的节点 item
        console.log(e.item);
        // 当前操作是收起（`true`）还是展开（`false`）
        console.log(e.collapsed);
        console.log(e);
        // this.graph.priorityState(e.item, 'selected')
        // this.graph.setItemState(e.item, 'selected', true)
        this.graph.focusItem(e.item, true, {
          easing: 'easeCubic',
          duration: 400,
        });
      });
    },
    setTreeData() {
      // 注册数据
      this.graph.read(data);
    },
    getData() {
      app.post('/chefoperation/getClan', {
        token: wx.getStorageSync('userInfo').chef_token
      }).then(res => {
        if (res.data.status == 1) {
          this.setData({
            treeList: [res.data.data]
          })
          wx.hideLoading()
        }
      })
    },
  },
  lifetimes: {
    attached: function () {
      wx.showLoading({
        title: '加载中',
      })
      this.getData()
      F6.registerLayout('force', force);
      F6.registerGraph('TreeGraph', TreeGraph);
      // 同步获取window的宽高
      const {
        windowWidth,
        windowHeight,
        pixelRatio
      } = wx.getSystemInfoSync();
      this.setData({
        canvasWidth: windowWidth,
        canvasHeight: windowHeight - 50,
        pixelRatio: pixelRatio,
      });
      setTimeout(() => {
        this.setTreeData()
      }, 1000)
    }
  }
})