var React = require('react');
var css = require("components/form/form.styl");

var Form = React.createClass({

  render: function() {
    return (

      <div className="button">
        <h2 className="form">Forms</h2>
        <p>表單元件樣使用採原生的 tag 定義。</p>
        <form method="post" action="" className="forms" autocomplete="off">
          <label>
            Email
            <input type="email" className="width-50"  autocomplete="off" />
          </label>
          <label>
            Password
            <input type="password" className="width-50"  autocomplete="off" />
          </label>
          <p>
          <button className="btn btn-outline">Cancel</button> <button className="btn">Log in</button>
          </p>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label&gt;
              Email
              &lt;input type=&quot;email&quot; name=&quot;user-email&quot; class=&quot;width-50&quot; /&gt;
            &lt;/label&gt;
            &lt;label&gt;
              Password
              &lt;input type=&quot;password&quot; name=&quot;user-password&quot; class=&quot;width-50&quot; /&gt;
            &lt;/label&gt;
            &lt;p&gt;
              &lt;button class=&quot;btn-green&quot;&gt;Log in&lt;/button&gt;
              &lt;button class=&quot;btn&quot;&gt;Cancel&lt;/button&gt;
            &lt;/p&gt;
          &lt;/form&gt;
        </pre>
        <p>html5 - 更簡潔的外觀</p>
        <form method="post" action="" className="forms">
          <label>
            <input type="email" placeholder="Email" className="width-50"  />
          </label>
          <label>
            <input type="password" placeholder="Password" className="width-50"  />
          </label>
          <p>
          <button className="btn width-50">Log in</button>
          </p>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label&gt;
              &lt;input type=&quot;email&quot; name=&quot;user-email&quot; placeholder=&quot;Email&quot; class=&quot;width-50&quot; /&gt;
            &lt;/label&gt;
            &lt;label&gt;
              &lt;input type=&quot;password&quot; name=&quot;user-password&quot; placeholder=&quot;Password&quot; class=&quot;width-50&quot; /&gt;
            &lt;/label&gt;
            &lt;p&gt;
              &lt;button class=&quot;btn-green width-50&quot;&gt;Log in&lt;/button&gt;
            &lt;/p&gt;
          &lt;/form&gt;
        </pre>
        <h4 className="shutt-docs-head">Input states / 狀態</h4>
        <form method="post" action="" className="forms">
          <label>
            Error  <span className="error">Error</span>
            <input type="text" name="state-error" className="input-error width-40"  />
          </label>
          <label>
            Success  <span className="success">Success</span>
            <input type="text" name="state-success" className="input-success width-40" />
          </label>
          <label>
            Default
            <input type="text" name="state-gray" className="input-gray width-40" />
          </label>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label&gt;
              Error  &lt;span class=&quot;error&quot;&gt;Error&lt;/span&gt;
              &lt;input type=&quot;text&quot; name=&quot;state-error&quot; class=&quot;input-error width-40&quot;  /&gt;
            &lt;/label&gt;
            &lt;label&gt;
              Success  &lt;span class=&quot;success&quot;&gt;Success&lt;/span&gt;
              &lt;input type=&quot;text&quot; name=&quot;state-success&quot; class=&quot;input-success width-40&quot; /&gt;
            &lt;/label&gt;
            &lt;label&gt;
              Gray
              &lt;input type=&quot;text&quot; name=&quot;state-gray&quot; class=&quot;input-gray width-40&quot; /&gt;
            &lt;/label&gt;
          &lt;/form&gt;
        </pre>
        <h4 className="shutt-docs-head">Required / 必填欄位</h4>
        <form method="post" action="" className="forms">
          <label>
            Email <span className="req">*</span>
            <input type="email" name="user-email" className="width-50"  />
          </label>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label&gt;
              Email &lt;span class=&quot;req&quot;&gt;*&lt;/span&gt;
              &lt;input type=&quot;email&quot; name=&quot;user-email&quot; class=&quot;width-50&quot;  /&gt;
            &lt;/label&gt;
          &lt;/form&gt;
        </pre>
        <h4 className="shutt-docs-head">Input descriptions / 欄位描述</h4>
        <form method="post" action="" className="forms">
          <label>
            Name <span className="forms-desc">Always nice to feel important.</span>
            <input type="text" name="user-name" className="width-50"  />
          </label>
          <label>
            Email
            <input type="email" name="user-email" className="width-50"  />
            <div className="forms-desc">Please enter your email.</div>
          </label>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label&gt;
              Name &lt;span class=&quot;forms-desc&quot;&gt;Always nice to feel important.&lt;/span&gt;
              &lt;input type=&quot;text&quot; name=&quot;user-name&quot; class=&quot;width-50&quot;  /&gt;
            &lt;/label&gt;
            &lt;label&gt;
              Email
              &lt;input type=&quot;email&quot; name=&quot;user-email&quot; class=&quot;width-50&quot;  /&gt;
              &lt;div class=&quot;forms-desc&quot;&gt;Please enter your email.&lt;/div&gt;
            &lt;/label&gt;
          &lt;/form&gt;
        </pre>
        <h4 className="shutt-docs-head">Form sections</h4>
        <form method="post" action="" className="forms">
          <label>
            Name
            <input type="text" name="user-name" className="width-50"  />
          </label>
          <fieldset>
            <legend>Login data</legend>
            <label>
              Email
              <input type="email" className="width-50"  />
            </label>
            <label>
              Password
              <input type="password" className="width-50"  />
            </label>
          </fieldset>
          <fieldset>
            <legend>About</legend>
            <label>
              <textarea name="user-about" className="width-100" rows="5"></textarea>
            </label>
          </fieldset>
          <p>
          <input type="submit" className="btn" value="Submit" />
          </p>
        </form>
        <pre className="prettyprint">
        &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
          &lt;label&gt;
            Name
            &lt;input type=&quot;text&quot; name=&quot;user-name&quot; class=&quot;width-50&quot;  /&gt;
          &lt;/label&gt;
          &lt;fieldset&gt;
            &lt;legend&gt;Login data&lt;/legend&gt;
            &lt;label&gt;
              Email
              &lt;input type=&quot;email&quot; name=&quot;user-email&quot; class=&quot;width-50&quot;  /&gt;
            &lt;/label&gt;
            &lt;label&gt;
              Password
              &lt;input type=&quot;password&quot; name=&quot;user-password&quot; class=&quot;width-50&quot;  /&gt;
            &lt;/label&gt;
          &lt;/fieldset&gt;
          &lt;fieldset&gt;
            &lt;legend&gt;About&lt;/legend&gt;
            &lt;label&gt;
              &lt;textarea name=&quot;user-about&quot; class=&quot;width-100&quot; rows=&quot;5&quot;&gt;&lt;/textarea&gt;
            &lt;/label&gt;
          &lt;/fieldset&gt;
          &lt;p&gt;
            &lt;input type=&quot;submit&quot; class=&quot;btn&quot; value=&quot;Submit&quot; /&gt;
          &lt;/p&gt;
        &lt;/form&gt;
        </pre>
        <h4 className="shutt-docs-head">Checkboxes</h4>
        <p>清單列表樣式 <code>.forms-list</code> </p>
        <form method="post" action="" className="forms">
          <ul className="forms-list">
            <li>
              <label for="checkbox-1">
                <input type="checkbox" name="checkbox-1" id="checkbox-1" /> Check 1
              </label>
            </li>
            <li>
              <label for="checkbox-2">
                <input type="checkbox" name="checkbox-2" id="checkbox-2" /> Check 2
              </label>
            </li>
            <li>
              <label for="checkbox-3">
                <input type="checkbox" name="checkbox-3" id="checkbox-3" /> Check 3
              </label>
            </li>
            <li>
              <label for="checkbox-4">
                <input type="checkbox" name="checkbox-4" id="checkbox-4" /> Check 4
              </label>
            </li>
          </ul>
        </form>
        <pre className="prettyprint">
        &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
           &lt;ul class=&quot;forms-list&quot;&gt;
            &lt;li&gt;
               &lt;input type=&quot;checkbox&quot; name=&quot;checkbox-1&quot; id=&quot;checkbox-1&quot;&gt;
               &lt;label for=&quot;checkbox-1&quot;&gt;Check 1&lt;/label&gt;
            &lt;/li&gt;
            ...
          &lt;/ul&gt;
        &lt;/form&gt;
        </pre>
        <h4 className="shutt-docs-head">Inline checkboxes</h4>
        <p>行內清單列表樣式 <code>.forms-inline-list</code> </p>
        <form method="post" action="" className="forms">
          <label>Please check in
            <ul className="forms-inline-list">
              <li>
                <label for="checkbox-5">
                  <input type="checkbox" name="checkbox-5" id="checkbox-5" /> Check 5
                </label>
              </li>
              <li>
                <label for="checkbox-6">
                  <input type="checkbox" name="checkbox-6" id="checkbox-6" /> Check 6
                </label>
              </li>
              <li>
                <label for="checkbox-7">
                  <input type="checkbox" name="checkbox-7" id="checkbox-7" /> Check 7
                </label>
              </li>
              <li>
                <label for="checkbox-8">
                  <input type="checkbox" name="checkbox-8" id="checkbox-8" /> Check 8
                </label>
              </li>
            </ul>
          </label>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label&gt;Please check in
              &lt;ul class=&quot;forms-inline-list&quot;&gt;
                &lt;li&gt;
                  &lt;input type=&quot;checkbox&quot; name=&quot;checkbox-5&quot; id=&quot;checkbox-5&quot;&gt;
                  &lt;label for=&quot;checkbox-5&quot;&gt;Check 5&lt;/label&gt;
                &lt;/li&gt;
                ...
              &lt;/ul&gt;
            &lt;/label&gt;
          &lt;/form&gt;
        </pre>

        <h4 className="shutt-docs-head">Options</h4>
        <form method="post" action="" className="forms">
          <ul className="forms-list">
            <li>
              <label for="radio-1">
                <input type="radio" name="radio-1" id="radio-1" /> Option 1
              </label>
            </li>
            <li>
              <label for="radio-2">
                <input type="radio" name="radio-1" id="radio-2" /> Option 2
              </label>
            </li>
            <li>
              <label for="radio-3">
                <input type="radio" name="radio-1" id="radio-3" /> Option 3
              </label>
            </li>
            <li>
              <label for="radio-4">
                <input type="radio" name="radio-1" id="radio-4" /> Option 4
              </label>
            </li>
          </ul>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;ul class=&quot;forms-list&quot;&gt;
              &lt;li&gt;
                &lt;label for=&quot;radio-1&quot;&gt;
                  &lt;input type=&quot;radio&quot; name=&quot;radio-1&quot; id=&quot;radio-1&quot;&gt;
                Option 1&lt;/label&gt;
              &lt;/li&gt;
              ...
            &lt;/ul&gt;
          &lt;/form&gt;
        </pre>
        {/*<h4 className="shutt-docs-head">More examples</h4>
        <form method="post" action="" className="forms">
          <label for="select_multi">
            Select multiple
            <select name="select-multi" className="width-50" multiple="multiple" size="10">
              <optgroup label="Group 1">
                <option value="1">Some text goes here</option>
                <option value="2">Another choice could be here</option>
                <option value="3">Yet another item to be chosen</option>
              </optgroup>
              <optgroup label="Group 2">
                <option value="4">Some text goes here</option>
                <option value="5">Another choice could be here</option>
                <option value="6">Yet another item to be chosen</option>
              </optgroup>
              <optgroup label="Group 3">
                <option value="7">Some text goes here</option>
                <option value="8">Another choice could be here</option>
                <option value="9">Yet another item to be chosen</option>
              </optgroup>
            </select>
          </label>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label for=&quot;select_multi&quot;&gt;
              Select multiple
              &lt;select name=&quot;select-multi&quot; class=&quot;width-50&quot; multiple=&quot;multiple&quot; size=&quot;10&quot;&gt;
              &lt;optgroup label=&quot;Group 1&quot;&gt;
                &lt;option value=&quot;1&quot;&gt;Some text goes here&lt;/option&gt;
                ...
              &lt;/optgroup&gt;
              ...
              &lt;/select&gt;
            &lt;/label&gt;
          &lt;/form&gt;
        </pre>
        <form method="post" action="" className="forms">
          <label>
            Choose date
            <ul className="forms-inline-list">
              <li>
                <select><option>---</option></select>
                <div className="forms-desc">Month</div>
              </li>
              <li>
                <select><option>---</option></select>
                <div className="forms-desc">Day</div>
              </li>
              <li>
                <select><option>---</option></select>
                <div className="forms-desc">Year</div>
              </li>
            </ul>
          </label>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label&gt;
              Choose date
              &lt;ul class=&quot;forms-inline-list&quot;&gt;
                &lt;li&gt;
                  &lt;select&gt;&lt;option&gt;---&lt;/option&gt;&lt;/select&gt;
                  &lt;div class=&quot;forms-desc&quot;&gt;Month&lt;/div&gt;
                &lt;/li&gt;
                &lt;li&gt;
                  &lt;select&gt;&lt;option&gt;---&lt;/option&gt;&lt;/select&gt;
                  &lt;div class=&quot;forms-desc&quot;&gt;Day&lt;/div&gt;
                &lt;/li&gt;
                &lt;li&gt;
                  &lt;select&gt;&lt;option&gt;---&lt;/option&gt;&lt;/select&gt;
                  &lt;div class=&quot;forms-desc&quot;&gt;Year&lt;/div&gt;
                &lt;/li&gt;
              &lt;/ul&gt;
            &lt;/label&gt;
          &lt;/form&gt;
        </pre>
        <form method="post" action="" className="forms">
          Phone number
          <ul className="forms-inline-list">
            <li>
              ( <input type="text" name="phone-prefix" size="3" /> )
            </li>
            <li>
              <input type="text" name="phone-number-1" size="3" /> - <input type="text" name="phone-number-2" size="3" />
            </li>
            <li>
              &nbsp;轉: <input type="text" name="phone-ext" size="3" />
            </li>
            <div className="forms-desc">坐骨神經痛就是腰部椎間盤移位. 或是腰部椎間盤疾患. 造成腰痛或是肢體疼痛. 有這種情形請留電話.</div>
          </ul>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            Phone number
            &lt;ul class=&quot;forms-inline-list&quot;&gt;
              &lt;li&gt;
                ( &lt;input type=&quot;text&quot; name=&quot;phone-prefix&quot; size=&quot;3&quot; /&gt; )
              &lt;/li&gt;
              &lt;li&gt;
                &lt;input type=&quot;text&quot; name=&quot;phone-number-1&quot; size=&quot;3&quot; /&gt;
              &lt;/li&gt;
                - &lt;input type=&quot;text&quot; name=&quot;phone-number-2&quot; size=&quot;3&quot; /&gt;
              &lt;/li&gt;
              &lt;li&gt;
                ext: &lt;input type=&quot;text&quot; name=&quot;phone-ext&quot; size=&quot;3&quot; /&gt;
              &lt;/li&gt;
              &lt;div class=&quot;forms-desc&quot;&gt;Needed if there are questions about your order&lt;/div&gt;
            &lt;/ul&gt;
          &lt;/form&gt;
        </pre>
        <form method="post" action="" className="forms">
          <label className="input-groups">
            <input type="text" name="search" placeholder="Search" />
            <span className="btn-append">
            <button className="btn">Go</button>
            </span>
          </label>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label class=&quot;input-groups&quot;&gt;
              &lt;input type=&quot;text&quot; name=&quot;search&quot; placeholder=&quot;Search&quot; /&gt;
              &lt;span class=&quot;btn-append&quot;&gt;
                &lt;button class=&quot;btn&quot;&gt;Go&lt;/button&gt;
              &lt;/span&gt;
            &lt;/label&gt;
          &lt;/form&gt;
        </pre>
        <form method="post" action="" className="forms">
          <label for="country">
            Country
            <select className="width-50">
              <option>---</option>
            </select>
            <div className="forms-desc">Where you from?</div>
          </label>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label for=&quot;country&quot;&gt;
              Country
              &lt;select class=&quot;width-50&quot;&gt;
                &lt;option&gt;---&lt;/option&gt;
              &lt;/select&gt;
              &lt;div class=&quot;forms-desc&quot;&gt;Where you from?&lt;/div&gt;
            &lt;/label&gt;
          &lt;/form&gt;
        </pre>
        <form method="post" action="" className="forms">
          <label for="text">
            Text
            <textarea rows="4" className="width-100"></textarea>
          </label>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label for=&quot;text&quot;&gt;
              Text
              &lt;textarea rows=&quot;4&quot; class=&quot;width-100&quot;&gt;&lt;/textarea&gt;
            &lt;/label&gt;
          &lt;/form&gt;
        </pre>
        <form method="post" action="" className="forms">
          <label for="text">
            Text
            <textarea rows="4" className="width-60"></textarea>
          </label>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label for=&quot;text&quot;&gt;
              Text
              &lt;textarea rows=&quot;4&quot; class=&quot;width-60&quot;&gt;&lt;/textarea&gt;
            &lt;/label&gt;
          &lt;/form&gt;
        </pre>
        <h4 className="shutt-docs-head">Append & prepend</h4>
        <form method="post" action="" className="forms">
          <label>
            How much is it?
            <div className="input-groups width-50">
              <span className="input-prepend">$</span>
              <input type="text" value="" />
            </div>
          </label>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;label&gt;
              How much is it?
              &lt;div class=&quot;input-groups width-50&quot;&gt;
                &lt;span class=&quot;input-prepend&quot;&gt;$&lt;/span&gt;&lt;input type=&quot;text&quot;&gt;
              &lt;/div&gt;
            &lt;/label&gt;
          &lt;/form&gt;
        </pre>
        <form method="post" action="" className="forms">
          <div className="input-groups">
            <span className="input-prepend">$</span>
            <input type="text" />
          </div>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;div class=&quot;input-groups&quot;&gt;
              &lt;span class=&quot;input-prepend&quot;&gt;$&lt;/span&gt;&lt;input type=&quot;text&quot;&gt;
            &lt;/div&gt;
          &lt;/form&gt;
        </pre>
        <form method="post" action="" className="forms">
          <div className="input-groups width-50">
            <input type="text" /><span className="input-append">$</span>
          </div>
        </form>
        <pre className="prettyprint">
          &lt;form method=&quot;post&quot; action=&quot;&quot; class=&quot;forms&quot;&gt;
            &lt;div class=&quot;input-groups width-30&quot;&gt;
              &lt;input type=&quot;text&quot;&gt;&lt;span class=&quot;input-append&quot;&gt;$&lt;/span&gt;
            &lt;/div&gt;
          &lt;/form&gt;
        </pre>*/}
      </div>
    );
  }
});

module.exports = Form;
