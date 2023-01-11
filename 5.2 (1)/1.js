const xml_input=`
<list>
  <human>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </human>
  <human>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </human>
</list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xml_input, "text/xml")
const human_list = [] 

const list_node = xmlDOM.querySelector("list")
const human_nodes = list_node.querySelectorAll("human")

human_nodes.forEach((node) => {
  human = {}
    
  const first = node.querySelector("name").querySelector("first").textContent
  const second = node.querySelector("name").querySelector("second").textContent
  human.name = first + ' ' + second
  human.age = Number(node.querySelector("age").textContent)
  human.prof = node.querySelector("prof").textContent
  human.lang = node.querySelector("name").getAttribute("lang")
  
  human_list.push(human)

})

const result = {}
result.list = human_list

console.log(result)
