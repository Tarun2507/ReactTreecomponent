
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Tree} from './components';
function App() {
  const treeNodeData = [
    {
      name: 'm1-administrative and prescribing information',
      isDocumentnode : false,
      isExpanded : true,
      isMainNode : true,
      background : "5px solid #EC857C",
      subnodes: [
        {
          name : 'Actions on Document.pdf',
          isDocumentnode : true,
          status : "Draft",
          isExpanded : true,
          subnodes : []
        },
        {
          name : 'US FDA TOC for ectd.pdf',
          isDocumentnode : true,
          isExpanded : true,
          status : "In progress",
          subnodes : []
        }]
    },
    {
      name : 'm2-common-technical-document summariesinf',
      isDocumentnode : false,
      isExpanded : true,
      isMainNode : true,
      background : "5px solid #66ACC2",
      subnodes :[{
        name : 'm2-1-introduction',
        isDocumentnode : false,
        isExpanded : true,
        subnodes : [{
          name : 'm2-1-introduction.pdf',
          isDocumentnode : true,
          status : "In progress",
          isExpanded : true,
          subnodes : []
        }]
      },
      {
        name : 'm2-6-nonclinical-summary',
        isDocumentnode : false,
        isExpanded : true,
        subnodes : [{
          name : 'm2-6-non-clinical-summary.pdf',
          isDocumentnode : true,
          status : "In progress",
          isExpanded : true,
          subnodes : []
        }]
      },
      {
        name : 'm2-7-nonclinical-summary',
        isDocumentnode : false,
        isExpanded : true,
        isLastchildnode : true,
        subnodes : [{
          name : 'm2-7-non-clinical-summary.pdf',
          isDocumentnode : true,
          status : "In progress",
          isExpanded : true,
          subnodes : []
        },
      {
        name : 'm2-7.1.1-non-clinical-summary.pdf',
        isDocumentnode : true,
        status : "In progress",
        isExpanded : true,
        subnodes : [] 
      }]
      }
    ]
    },
    {
      name : 'm3-common-technical-document summariesinf',
      isDocumentnode : false,
      isExpanded : true,
      isMainNode : true,
      background : "5px solid brown",
      subnodes :[{
        name : 'm3-1-introduction',
        isDocumentnode : false,
        isExpanded : true,
        subnodes : [{
          name : 'm3-1-introduction.pdf',
          isDocumentnode : true,
          status : "Draft",
          isExpanded : true,
          subnodes : []
        }]
      },
      {
        name : 'm3-6-nonclinical-summary',
        isDocumentnode : false,
        isExpanded : true,
        isLastchildnode : true,
        subnodes : [{
          name : 'm3-6.1.1-non-clinical-summary',
          isDocumentnode : false,
          isExpanded : true,
          subnodes : [
            {
              name : 'm3-6.1.2-non-clinical-summary',
              isDocumentnode : false,
              isExpanded : true,
              subnodes : [
                {
                  name : 'm3-6.1.2-introduction.pdf',
                  isDocumentnode : true,
                  status : "In progress",
                  isExpanded : true,
                  subnodes : []
                }
              ]
            },
            {
              name : 'm3-6.1.1.3-non-clinical-summary',
              isDocumentnode : false,
              isExpanded : true,
              isLastchildnode : true,
              subnodes : [
                {
                  name : 'm3-6.1.1.3-introduction.pdf',
                  isDocumentnode : true,
                  status : "In progress",
                  isExpanded : true,
                  subnodes : []
                }
              ]
            }
          ]
        },
        {
          name : 'm3-6.1.2-non-clinical-summary',
          isDocumentnode : false,
          isExpanded : true,
          subnodes : [
            {
              name : 'm3-6.1.2-introduction.pdf',
              isDocumentnode : true,
              status : "Draft",
              isExpanded : true,
              subnodes : []
            }
          ]
        },
      {
        name : 'm3-6.1.3-non-clinical-summary',
        isDocumentnode : false,
        isExpanded : true,
        isLastchildnode : true,
        subnodes : [
          {
            name : 'm3-6.1.3-introduction.pdf',
            isDocumentnode : true,
            status : "In progress",
            isExpanded : true,
            subnodes : []
          }
        ]
      }]
      }
    ]
    }
  ]
  return (
    <Router>
    <div>
<Navs></Navs>

      <Switch>
      <Route path="/" exact>
      <Tree treedata = {treeNodeData}> </Tree>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/tree">
          <Tree treedata = {treeNodeData}> </Tree>
        </Route>
      
      </Switch>
    </div>
  </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function Navs() {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav>
  );
}
export default App;
