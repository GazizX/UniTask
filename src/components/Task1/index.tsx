import "./pic.css";
export default function Task1() {
  return (
    <>
      <header className="task-header">
        <h1>Задание 1</h1>
      </header>

      <div className="outer_bg">
        <div className="inner_bg">
          <div className="clouds">
            <div className="cloud"></div>
            <div className="cloud"></div>
          </div>
          <div className="dragonfly">
            <div className="wings">
              <div className="wing"></div>
              <div className="wing"></div>
              <div className="wing"></div>
              <div className="wing"></div>
            </div>
            <div className="df_body"></div>
            <div className="df_head">
              <div className="eyes">
                <div className="eye"></div>
                <div className="eye"></div>
              </div>
            </div>
          </div>
          <div className="mushrooms">
            <div className="mushroom">
              <div className="ms_leg"></div>
              <div className="ms_head"></div>
            </div>
            <div className="mushroom">
              <div className="ms_leg"></div>
              <div className="ms_head"></div>
            </div>
          </div>
          <div className="grass_container">
            <div className="grass_blade"></div>
            <div className="grass_blade"></div>
            <div className="grass_blade"></div>
            <div className="grass_blade"></div>
          </div>
        </div>
        <ul className="dots top">
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
        </ul>
        <ul className="dots bottom">
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
        </ul>
        <ul className="dots left">
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
        </ul>
        <ul className="dots right">
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
        </ul>
      </div>
    </>
  );
}
