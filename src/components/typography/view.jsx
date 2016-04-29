var React = require('react');
var css = require("components/typography/typography.styl");

var Typography = React.createClass({

  render: function() {
    return (

      <div className="typography">

        <h2 className="heading">Typography</h2>

        <h1>Header 1</h1>
        <pre className="prettyprint">
          &lt;h1&gt;Header 1&lt;/h1&gt;
        </pre>

        <h2>Header 2</h2>
        <pre className="prettyprint">
          &lt;h2&gt;Header 2&lt;/h2&gt;
        </pre>

        <h3>Header 3</h3>
        <pre className="prettyprint">
          &lt;h3&gt;Header 3&lt;/h3&gt;
        </pre>

        <h4>Header 4 </h4>
        <pre className="prettyprint">
          &lt;h4&gt;Header 4&lt;/h4&gt;
        </pre>

        <h5>Header 5</h5>
        <pre className="prettyprint">
          &lt;h5&gt;Header 5&lt;/h5&gt;
        </pre>

        <h6>Header 6</h6>
        <pre className="prettyprint">
          &lt;h6&gt;Header 6&lt;/h6&gt;
        </pre>

        {/*<hgroup>
          <h1 className="subheading">Subheading 1 / 子標題1</h1>
        </hgroup>
        <pre className="prettyprint">
          &lt;hgroup&gt;
            &lt;h1&gt;Header 1&lt;/h1&gt;
            &lt;h1 className=&quot;subheading&quot;&gt;Subheading 1&lt;/h1&gt;
          &lt;/hgroup&gt;
        </pre>

        <hgroup>
          <h2>Header 2 / 標題 2</h2>
          <h2 className="subheading">Subheading 2 / 子標題2</h2>
        </hgroup>
        <pre className="prettyprint">
          &lt;hgroup&gt;
            &lt;h2&gt;Header 2&lt;/h2&gt;
            &lt;h2 className=&quot;subheading&quot;&gt;Subheading 2&lt;/h2&gt;
          &lt;/hgroup&gt;
        </pre>

        <hgroup>
          <h3>Header 3 / 標題 3</h3>
          <h3 className="subheading">Subheading 3 / 子標題3</h3>
        </hgroup>
        <pre className="prettyprint">
          &lt;hgroup&gt;
            &lt;h3&gt;Header 3&lt;/h3&gt;
            &lt;h3 className=&quot;subheading&quot;&gt;Subheading 3&lt;/h3&gt;
          &lt;/hgroup&gt;
        </pre>

        <hgroup>
          <h4>Header 4 / 標題 4</h4>
          <h4 className="subheading">Subheading 4 / 子標題4</h4>
        </hgroup>
        <pre className="prettyprint">
          &lt;hgroup&gt;
            &lt;h4&gt;Header 4&lt;/h4&gt;
            &lt;h4 className=&quot;subheading&quot;&gt;Subheading 4&lt;/h4&gt;
          &lt;/hgroup&gt;
        </pre>

        <hgroup>
          <h5>Header 5 / 標題 5</h5>
          <h5 className="subheading">Subheading 5 / 子標題5</h5>
        </hgroup>
        <pre className="prettyprint">
          &lt;hgroup&gt;
            &lt;h5&gt;Header 5&lt;/h5&gt;
            &lt;h5 className=&quot;subheading&quot;&gt;Subheading 5&lt;/h5&gt;
          &lt;/hgroup&gt;
        </pre>*/}

        {/*<h4 className="shutt-docs-head">Lists / 列表清單</h4>
        <ul>
          <li>list item 1</li>
          <li>
            list item 1
            <ul>
              <li>list item 2</li>
              <li>
                list item 2
                <ul>
                  <li>list item 3</li>
                  <li>list item 3</li>
                </ul>
              </li>
              <li>list item 2</li>
              <li>list item 2</li>
            </ul>
          </li>
          <li>list item 1</li>
          <li>list item 1</li>
        </ul>
        <pre className="prettyprint kube-docs-pre">
          &lt;ul&gt;
            &lt;li&gt;list item 1&lt;/li&gt;
            &lt;li&gt;list item 1
              &lt;ul&gt;
                &lt;li&gt;list item 2&lt;/li&gt;
                &lt;li&gt;list item 2
                  &lt;ul&gt;
                    &lt;li&gt;list item 3&lt;/li&gt;
                    &lt;li&gt;list item 3&lt;/li&gt;
                  &lt;/ul&gt;
                &lt;/li&gt;
                &lt;li&gt;list item 2&lt;/li&gt;
                &lt;li&gt;list item 2&lt;/li&gt;
              &lt;/ul&gt;
            &lt;/li&gt;
            &lt;li&gt;list item 1&lt;/li&gt;
            &lt;li&gt;list item 1&lt;/li&gt;
          &lt;/ul&gt;
        </pre>
        <ol>
          <li>list item 1</li>
          <li>list item 1
            <ol>
              <li>list item 2</li>
              <li>
                list item 2
                <ol>
                  <li>list item 3</li>
                  <li>list item 3</li>
                </ol>
              </li>
              <li>list item 2</li>
              <li>list item 2</li>
            </ol>
          </li>
          <li>list item 1</li>
          <li>list item 1</li>
        </ol>
        <pre className="prettyprint kube-docs-pre">
          &lt;ol&gt;
            &lt;li&gt;list item 1&lt;/li&gt;
            &lt;li&gt;list item 1
              &lt;ol&gt;
                &lt;li&gt;list item 2&lt;/li&gt;
                &lt;li&gt;list item 2
                  &lt;ol&gt;
                    &lt;li&gt;list item 3&lt;/li&gt;
                    &lt;li&gt;list item 3&lt;/li&gt;
                  &lt;/ol&gt;
                &lt;/li&gt;
                &lt;li&gt;list item 2&lt;/li&gt;
                &lt;li&gt;list item 2&lt;/li&gt;
              &lt;/ol&gt;
            &lt;/li&gt;
            &lt;li&gt;list item 1&lt;/li&gt;
            &lt;li&gt;list item 1&lt;/li&gt;
          &lt;/ol&gt;
        </pre>
        <dl>
          <dt>Description name</dt>
          <dd>Description value</dd>
          <dt>Description name</dt>
          <dd>Description value</dd>
          <dt>Description name</dt>
          <dd>Description value</dd>
        </dl>
        <pre className="prettyprint kube-docs-pre">
          &lt;dl&gt;
            &lt;dt&gt;Description name&lt;/dt&gt;
            &lt;dd&gt;Description value&lt;/dd&gt;
            &lt;dt&gt;Description name&lt;/dt&gt;
            &lt;dd&gt;Description value&lt;/dd&gt;
            &lt;dt&gt;Description name&lt;/dt&gt;
            &lt;dd&gt;Description value&lt;/dd&gt;
          &lt;/dl&gt;
        </pre>*/}
      </div>
    );
  }

});

module.exports = Typography;
