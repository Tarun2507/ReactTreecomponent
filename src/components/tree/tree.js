import { useState } from 'react'
import styles from './tree.module.css'
function Tree(props) {
    const mystyle = {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        paddingLeft: '5px',
        paddingBottom: '10px',
        borderBottom: '1px solid #E7EDF8'
    }
    const [data, setData] = useState(props.treedata)
    function togglenode(node) {
        const objindex = data.findIndex((obj => node === obj))
        const newdata = [...data]
        newdata[objindex].isExpanded = !newdata[objindex].isExpanded
        setData(newdata)
    }


    const repeatNodes =

        data.map((node, index) =>
            <div key={index} className={styles.tree} style={{ borderLeft: node.isMainNode ? node.background : 'none' }}>
                <ul className={styles.treeview}>
                    <li key={index} className={styles.treenode}>
                        <div className={styles.nodevalue}>
                            {
                                (() => {
                                    if (node.subnodes.length > 0 && node.isExpanded === false) {
                                        return (
                                            <img className={styles.toggleicon} style={{ paddingLeft: node.isMainNode ? '7px' : '0px' }} alt='' onClick={() => togglenode(node)} src={require('../../assets/caret_right.png')} ></img>
                                        );
                                    }
                                    else {
                                        if (node.subnodes.length > 0) {
                                            return (
                                                <img alt='' onClick={() => togglenode(node)} className={styles.toggleicon} style={{ paddingLeft: node.isMainNode ? '7px' : '0px' }} src={require('../../assets/caret_down.png')} ></img>
                                            );

                                        }
                                    }
                                })()
                            }
                            {
                                node.isDocumentnode && <img alt='' className={styles.docicon} src={require('../../assets/pdf.png')}></img>
                            }
                            <div style={mystyle} className={node.isDocumentnode ? 'docnode' : 'nondocnode'}>
                                <span>{node.name}</span>
                                {
                                    (() => {
                                        if (node.isDocumentnode) {
                                            return (
                                                <>
                                                    <div className={styles.documentinfo}>
                                                        <div className={styles.parentversion}>
                                                            <div className={styles.version}> v2.0 </div>
                                                        </div>
                                                        <div className={styles.parentdocstatus}>
                                                            <div className={styles.docstatus}>{node.status}</div>
                                                        </div>
                                                        <div className='properties'>Properties</div>
                                                    </div>
                                                </>
                                            )
                                        }
                                    })()
                                }
                                <div className={styles.parentassignee}>
                                    {
                                        (() => {
                                            if (node.isMainNode)
                                                <div className={styles.assignee}>
                                                    <span className={styles.assigneename}>Cameron</span>
                                                </div>
                                        })()
                                    }
                                </div>
                            </div>
                        </div>
                        {

                            (node.subnodes.length > 0 && node.isExpanded === true) &&
                            <template style={{ display: 'block' }}><Tree treedata={node.subnodes}></Tree></template>
                        }
                    </li>
                </ul>
            </div>
        )

    return (
        <>
            {repeatNodes}
        </>
    );

}
export default Tree;