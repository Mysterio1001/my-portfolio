/**
 *  @param {HTMLElement} containerRef - 目標容器ref
 *  @param {String} text - 文字
 * @param {Number} speed - 打字速度
 */

export async function typeCodeEffect(containerRef, speed = 10) {
  if (!containerRef) return;
  // 原生濾鏡監視器
  const walker = document.createTreeWalker(
    containerRef,
    NodeFilter.SHOW_TEXT, //   僅找出文字節點 不抓HTML標籤 ex: <span>
    null,
    false,
  );
  const textNodes = [];
  let node;

  // walker.nextNode() 會移動到下一個符合條件（文字）的節點
  // 如果找到了，會回傳該節點並賦值給 node 變數；找不到則回傳 null，結束迴圈
  while ((node = walker.nextNode())) {
    const obj = {
      node, // 儲存節點的參照，之後要往這裡填字
      fullText: node.textContent, // 備份原本的完整文字內容
    };

    textNodes.push(obj);

    node.textContent = ""; // 清空文字內容
  }

  //   開始打字
  for (const item of textNodes) {
    // 把備份取出放入各節點的文字內容
    for (const char of item.fullText) {
      item.node.textContent += char;
      await new Promise((resolve, reject) => setTimeout(resolve, speed));
    }
  }
}
