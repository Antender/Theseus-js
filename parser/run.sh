cat util.peg statement.peg op.peg var.peg operand.peg | pegjs -o theseus.js 
node index.js
rm theseus.js
