var React = require('react');
var css = require("components/button/button.styl");
var js = require("components/button/button.js");

var Button = React.createClass({
  componentDidMount(){
    setTimeout(function(){
      require('components/button/button.js')();
    }, 200);
  },
  render: function() {
    return (

      <div className="button">
        <h2 className="heading">Buttons</h2>

        <h4>Default buttons</h4>
        <p>
        <a href="javascript:;" className="btn">Link</a>
        <button className="btn">Button</button>
        <input type="submit" className="btn" value="Submit" />
        </p>
        <pre className="prettyprint">
          &lt;a href=&quot;#&quot; class=&quot;btn&quot;&gt;Link&lt;/a&gt;
          &lt;button class=&quot;btn&quot;&gt;Button&lt;/button&gt;
          &lt;input type=&quot;submit&quot; class=&quot;btn&quot; value=&quot;Submit&quot; /&gt;
        </pre>

        <h4 className="shutt-docs-head">Active & disabled buttons</h4>
        <p>
        <button className="btn btn-active">Active</button>
        <button className="btn" disabled="true">Disabled</button>
        <button className="btn btn-disabled">Disabled</button>
        </p>
        <pre className="prettyprint">
          &lt;button class=&quot;btn btn-active&quot;&gt;Active&lt;/button&gt;
          &lt;button class=&quot;btn&quot; disabled=&quot;true&quot;&gt;Disabled&lt;/button&gt;
          &lt;button class=&quot;btn btn-disabled&quot;&gt;Disabled&lt;/button&gt;
        </pre>

        <h4 className="shutt-docs-head">Small buttons</h4>
        <p>
        <a href="javascript:;" className="btn btn-small">Link</a>
        <button className="btn btn-small">Button</button>
        <input type="submit" className="btn btn-small" value="Submit" />
        <button className="btn btn-small btn-active">Active</button>
        <button className="btn btn-small" disabled="true">Disabled</button>
        </p>
        <pre className="prettyprint">
          &lt;a href=&quot;#&quot; class=&quot;btn btn-small&quot;&gt;Link&lt;/a&gt;
          &lt;button class=&quot;btn btn-small&quot;&gt;Button&lt;/button&gt;
          &lt;input type=&quot;submit&quot; class=&quot;btn btn-small&quot; value=&quot;Submit&quot; /&gt;
          &lt;button class=&quot;btn btn-small btn-active&quot;&gt;Active&lt;/button&gt;
          &lt;button class=&quot;btn btn-small&quot; disabled=&quot;true&quot;&gt;Disabled&lt;/button&gt;
        </pre>

        <h4 className="shutt-docs-head">Buttons width</h4>
        <p>
        <button className="btn width-100">Button 100%</button>
        </p>
        <p>
        <button className="btn width-50">Button 50%</button>
        </p>
        <pre className="prettyprint">
          &lt;button class=&quot;btn width-100&quot;&gt;Button 100%&lt;/button&gt;
          &lt;button class=&quot;btn width-50&quot;&gt;Button 50%&lt;/button&gt;
        </pre>

        <h4 className="shutt-docs-head">Append button</h4>
        <p className="input-groups">
        <input type="text" name="go" placeholder="Search" />
        <span className="btn-append">
        <button className="btn">Search</button>
        </span>
        </p>
        <pre className="prettyprint">
          &lt;p class=&quot;input-groups&quot;&gt;
          &lt;input type=&quot;text&quot; name=&quot;go&quot; placeholder=&quot;Search&quot; /&gt;
          &lt;span class=&quot;btn-append&quot;&gt;
          &lt;button class=&quot;btn&quot;&gt;Search&lt;/button&gt;
          &lt;/span&gt;
          &lt;/p&gt;
        </pre>

        <p className="input-groups width-50">
        <input type="text" name="go" placeholder="Search" />
        <span className="btn-append">
        <button className="btn">Search</button>
        </span>
        </p>
        <pre className="prettyprint">
          &lt;p class=&quot;input-groups width-50&quot;&gt;
          &lt;input type=&quot;text&quot; name=&quot;go&quot; placeholder=&quot;Search&quot; /&gt;
          &lt;span class=&quot;btn-append&quot;&gt;
          &lt;button class=&quot;btn&quot;&gt;Search&lt;/button&gt;
          &lt;/span&gt;
          &lt;/p&gt;
        </pre>

        <h4 className="shutt-docs-head">Outline button</h4>
        <p>
        <button className="btn btn-outline">Outline</button>
        <button className="btn btn-outline btn-active">Active</button>
        <button className="btn btn-outline" disabled="true">Disabled</button>
        <button className="btn btn-outline btn-disabled">Disabled</button>
        <button className="btn btn-outline btn-small">Small</button>
        </p>
        <pre className="prettyprint">
          &lt;button class=&quot;btn btn-outline&quot;&gt;Outline&lt;/button&gt;
          &lt;button class=&quot;btn btn-outline btn-active&quot;&gt;Active&lt;/button&gt;
          &lt;button class=&quot;btn btn-outline&quot; disabled=&quot;true&quot;&gt;Disabled&lt;/button&gt;
          &lt;button class=&quot;btn btn-outline btn-disabled&quot;&gt;Disabled&lt;/button&gt;
          &lt;button class=&quot;btn btn-outline btn-small&quot;&gt;Small&lt;/button&gt;
        </pre>

        <p>
        <button className="btn btn-outline btn-white">Outline White</button>
        </p>
        <pre className="prettyprint">
          &lt;button class=&quot;btn btn-outline btn-white&quot;&gt;Outline White&lt;/button&gt;
        </pre>

        {/*<p>
        <button className="btn btn-outline btn-blue">Outline Blue</button>
        <button className="btn btn-outline btn-red">Outline Red</button>
        <button className="btn btn-outline btn-green">Outline Green</button>
        <button className="btn btn-outline btn-yellow">Outline Black</button>
        </p>
        <pre className="prettyprint">
          &lt;button class=&quot;btn btn-outline btn-blue&quot;&gt;Outline Blue&lt;/button&gt;
          &lt;button class=&quot;btn btn-outline btn-red&quot;&gt;Outline Red&lt;/button&gt;
          &lt;button class=&quot;btn btn-outline btn-green&quot;&gt;Outline Green&lt;/button&gt;
          &lt;button class=&quot;btn btn-outline btn-black&quot;&gt;Outline Black&lt;/button&gt;
        </pre>*/}

        <h4 className="shutt-docs-head">White button</h4>
        <p>
        <button className="btn btn-white">White</button>
        <button className="btn btn-white btn-active">White</button>
        <button className="btn btn-white btn-disabled">White</button>
        </p>
        <pre className="prettyprint">
          &lt;button class=&quot;btn btn-white&quot;&gt;White&lt;/button&gt;
          &lt;button class=&quot;btn btn-white btn-active&quot;&gt;White&lt;/button&gt;
          &lt;button class=&quot;btn btn-white btn-disabled&quot;&gt;White&lt;/button&gt;
        </pre>

        {/*<h4 className="shutt-docs-head">Blue button</h4>
        <p>
        <button className="btn btn-blue">Blue</button>
        <button className="btn btn-blue btn-active">Blue</button>
        <button className="btn btn-blue btn-disabled">Blue</button>
        </p>
        <pre className="prettyprint">
          &lt;button class=&quot;btn btn-blue&quot;&gt;Blue&lt;/button&gt;
          &lt;button class=&quot;btn btn-blue btn-active&quot;&gt;Blue&lt;/button&gt;
          &lt;button class=&quot;btn btn-blue btn-disabled&quot;&gt;Blue&lt;/button&gt;
        </pre>

        <h4 className="shutt-docs-head">Red button</h4>
        <p>
        <button className="btn btn-red">Red</button>
        <button className="btn btn-red btn-active">Red</button>
        <button className="btn btn-red btn-disabled">Red</button>
        </p>
        <pre className="prettyprint">
          &lt;button class=&quot;btn btn-red&quot;&gt;Red&lt;/button&gt;
          &lt;button class=&quot;btn btn-red btn-active&quot;&gt;Red&lt;/button&gt;
          &lt;button class=&quot;btn btn-red btn-disabled&quot;&gt;Red&lt;/button&gt;
        </pre>

        <h4 className="shutt-docs-head">Green button</h4>
        <p>
        <button className="btn btn-green">Green</button>
        <button className="btn btn-green btn-active">Green</button>
        <button className="btn btn-green btn-disabled">Green</button>
        </p>
        <pre className="prettyprint">
          &lt;button class=&quot;btn btn-green&quot;&gt;Green&lt;/button&gt;
          &lt;button class=&quot;btn btn-green btn-active&quot;&gt;Green&lt;/button&gt;
          &lt;button class=&quot;btn btn-green btn-disabled&quot;&gt;Green&lt;/button&gt;
        </pre>

        <h4 className="shutt-docs-head">Yellow button</h4>
        <p>
        <button className="btn btn-yellow">Yellow</button>
        <button className="btn btn-yellow btn-active">Yellow</button>
        <button className="btn btn-yellow btn-disabled">Yellow</button>
        </p>
        <pre className="prettyprint">
          &lt;button class=&quot;btn btn-yellow&quot;&gt;Yellow&lt;/button&gt;
          &lt;button class=&quot;btn btn-yellow btn-active&quot;&gt;Yellow&lt;/button&gt;
          &lt;button class=&quot;btn btn-yellow btn-disabled&quot;&gt;Yellow&lt;/button&gt;
        </pre>*/}

    </div>
    );
  }

});

module.exports = Button;
