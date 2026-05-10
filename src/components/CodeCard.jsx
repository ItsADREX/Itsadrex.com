export default function CodeCard() {
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-bar">
        <i />
        <i />
        <i />
      </div>
      <pre>
{``}<span className="c">{`// adam.dev`}</span>{`
`}<span className="k">const</span>{` `}<span className="v">adam</span>{` = {
  `}<span className="v">role</span>{`: `}<span className="s">"Full-stack developer"</span>{`,
  `}<span className="v">stack</span>{`: [`}<span className="s">"HTML"</span>{`, `}<span className="s">"CSS"</span>{`, `}<span className="s">"JS"</span>{`, `}<span className="s">"React"</span>{`, `}<span className="s">"Node"</span>{`],
  `}<span className="v">mobile</span>{`: [`}<span className="s">"Flutter"</span>{`, `}<span className="s">"React Native"</span>{`],
  `}<span className="v">building</span>{`: `}<span className="s">"things people love"</span>{`,
};

`}<span className="k">function</span>{` `}<span className="v">collaborate</span>{`() {
  `}<span className="k">return</span>{` `}<span className="s">"Let's build something great →"</span>{`;
}`}
      </pre>
    </div>
  );
}
