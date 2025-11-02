Morning (4 hrs)
├─ 9-11 AM: ART OF TEACHING [Notes + 30 MCQs] → Target: 25/30
├─ 11-12 PM: Data Structures [Trees, Stack/Queue]
└─ 12-1 PM: Digital Logic [K-map, Gates, Number Systems]

Afternoon (3 hrs)
├─ 2-3 PM: OS [Process, Memory] + DBMS [Normalization]
├─ 3-4 PM: Networks [OSI, TCP/IP] + OOP Basics
└─ 4-5 PM: SOLVE PYQ Questions 1-50

Evening (3 hrs)
├─ 6-7 PM: AI + IoT + E-Commerce [Definitions only]
├─ 7-8 PM: TOC Standard Questions [Formulas]
└─ 8-9 PM: Other Skills [GK, Reasoning]
```

### **MONDAY (Nov 3) - 12 Hours**
```
Morning (5 hrs)
├─ 8-9 AM: Revise Art of Teaching
├─ 9-11 AM: FULL PYQ SOLVE (Q1-100)
├─ 11-12 PM: FULL PYQ SOLVE (Q101-150)
└─ 12-1 PM: Analyze mistakes

Afternoon (4 hrs)
├─ 2-4 PM: WEAK TOPICS from PYQ
├─ 4-5 PM: Formula Sheet Revision
└─ 5-6 PM: Digital Logic Practice

Evening (3 hrs)
├─ 6-7 PM: Art of Teaching Revision
├─ 7-8 PM: Quick Notes Scan
└─ 8-9 PM: 50 Random MCQs (Timed)
```

---

## 📚 **RAPID NOTES - HIGHEST ROI TOPICS**

---

## 🎓 **1. ART OF TEACHING (30 MARKS) - MUST SCORE 25+**

### **A. Bloom's Taxonomy (Most Important!)**
```
COGNITIVE DOMAIN (6 Levels):
1. Knowledge → Recall facts (define, list, name)
2. Comprehension → Understand meaning (explain, describe)
3. Application → Use in new situations (apply, solve)
4. Analysis → Break into parts (analyze, compare)
5. Synthesis → Create new (design, create, develop)
6. Evaluation → Judge value (evaluate, critique)

AFFECTIVE DOMAIN: Feelings/Emotions
PSYCHOMOTOR DOMAIN: Physical skills (map making, playing)
```

### **B. Teaching Methods**
| Method | Description | Merit | Demerit |
|--------|-------------|-------|---------|
| **Lecture** | Teacher talks, students listen | Fast content delivery | Passive learning |
| **Discussion** | Two-way interaction | Active participation | Time-consuming |
| **Demonstration** | Show + explain | Visual learning | Needs equipment |
| **Heuristic** | Discovery learning | Student investigates | Slow process |
| **Project** | Hands-on work | Practical skills | Resource intensive |

**Key Point:** Heuristic = "To investigate" (Armstrong's method)

### **C. Lesson Plan Components**
```
1. AIM - What to teach (broader)
2. OBJECTIVES - Specific, measurable outcomes
3. PREVIOUS KNOWLEDGE - Link to known concepts
4. TEACHING AIDS - Chalk, board, models, PPT
5. PRESENTATION - Main content delivery
6. EVALUATION - Check understanding
7. HOMEWORK - Practice/Reinforcement

Types: Herbart's 5-step, Modern lesson plan
```

### **D. Micro Teaching**
- **Duration:** 5-10 minutes
- **Focus:** ONE teaching skill at a time
- **Process:** Teach → Feedback → Re-teach
- **Most effective:** During teaching practice (not after)

### **E. Quick Facts (Memorize!)**
- **Main aim of teaching:** Develop personality (not just information)
- **Curriculum center point:** STUDENT (not teacher/principal)
- **Formative evaluation:** During teaching process
- **Summative evaluation:** After teaching process
- **Teaching aids:** Visual (chalk), Audio (radio), AV (TV)

**STANDARD QUESTIONS:**
```
Q. Main aim of classroom teaching?
→ To develop personality

Q. To ensure participation, we use?
→ Discussion method

Q. Microteaching most effective?
→ During teaching practice

Q. Center point of lesson plan?
→ Student

Q. TV is which type of aid?
→ Audio-visual

Q. Formative evaluation conducted?
→ During teaching-learning process
```

---

## 💾 **2. DATA STRUCTURES (13 Q) - Target 10/13**

### **A. Tree Traversals (MUST KNOW)**
```
       A
      / \
     B   C
    / \
   D   E

INORDER (Left-Root-Right): D B E A C
PREORDER (Root-Left-Right): A B D E C
POSTORDER (Left-Right-Root): D E B C A

Trick: IN = LRN, PRE = RLN, POST = LRN
```

### **B. Stack & Queue**
```
STACK (LIFO):
- Operations: Push, Pop, Peek
- Applications: 
  • Expression evaluation (postfix)
  • Recursion simulation
  • Undo operation

QUEUE (FIFO):
- Operations: Enqueue, Dequeue
- Types: Simple, Circular, Priority, Dequeue

DEQUEUE: Insert/Delete from BOTH ends
PRIORITY QUEUE: Elements have priority
```

### **C. Linked List**
```
SINGLY: Node → Node → NULL
DOUBLY: NULL ← Node ↔ Node → NULL
CIRCULAR: Node → Node → (back to first)

Operation complexity:
- Insert at beginning: O(1)
- Insert at end: O(n) [if no tail pointer]
- Search: O(n)
```

### **D. Sorting Algorithms (Just Complexity!)**
| Algorithm | Best | Average | Worst | Stable? |
|-----------|------|---------|-------|---------|
| Bubble | O(n) | O(n²) | O(n²) | Yes |
| Selection | O(n²) | O(n²) | O(n²) | No |
| Insertion | O(n) | O(n²) | O(n²) | Yes |
| Merge | O(n log n) | O(n log n) | O(n log n) | Yes |
| Quick | O(n log n) | O(n log n) | O(n²) | No |
| Heap | O(n log n) | O(n log n) | O(n log n) | No |

**Memorize:** Merge & Heap always O(n log n)

### **E. Hashing**
```
COLLISION RESOLUTION:
1. Linear Probing: h(k) + 1, h(k) + 2, h(k) + 3...
2. Quadratic Probing: h(k) + 1², h(k) + 2²...
3. Separate Chaining: Use linked lists
4. Double Hashing: Use second hash function

Most common: Separate chaining uses LINKED LISTS
```

**STANDARD QUESTIONS:**
```
Q. Which uses stack?
→ DFS (Depth First Search)

Q. Which uses queue?
→ BFS (Breadth First Search)

Q. Threaded binary tree?
→ Thread connects to predecessor/successor

Q. Time-space tradeoff data structure?
→ Hash tables

Q. Tower of Hanoi with n disks moves?
→ 2^n - 1
```

---

## 🔢 **3. DIGITAL LOGIC (13 Q) - Target 10/13**

### **A. Number System Conversions**
```
BINARY TO DECIMAL:
1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8+0+2+1 = 11

DECIMAL TO BINARY (Divide by 2):
13 ÷ 2 = 6 R1
6 ÷ 2 = 3 R0
3 ÷ 2 = 1 R1
1 ÷ 2 = 0 R1
→ 1101₂

GRAY CODE CONVERSION (XOR method):
Binary: 1011
Gray: Copy first → XOR adjacent
→ 1110

2's COMPLEMENT = 1's complement + 1
```

### **B. K-Map Simplification (MOST IMPORTANT!)**
```
2-VARIABLE K-MAP:
    B'  B
A'  □   □
A   □   □

3-VARIABLE K-MAP:
     B'C' B'C BC BC'
A'    □   □   □  □
A     □   □   □  □

4-VARIABLE K-MAP:
      C'D' C'D CD CD'
A'B'   □   □   □  □
A'B    □   □   □  □
AB     □   □   □  □
AB'    □   □   □  □

GROUPING RULES:
- Group 1s in powers of 2 (1,2,4,8,16)
- Make largest groups possible
- Groups can overlap
- Cover all 1s

PAIR (2 cells) = Eliminate 1 variable
QUAD (4 cells) = Eliminate 2 variables
OCTET (8 cells) = Eliminate 3 variables
```

### **C. Logic Gates Truth Tables**
```
AND: Output 1 only if ALL inputs are 1
OR: Output 1 if ANY input is 1
NOT: Output opposite
NAND: NOT-AND (opposite of AND)
NOR: NOT-OR (opposite of OR)
XOR: Output 1 if inputs are DIFFERENT
XNOR: Output 1 if inputs are SAME

UNIVERSAL GATES: NAND, NOR (can make any gate)
```

### **D. PLA (Programmable Logic Array)**
- **Components:** AND gates + OR gates
- **Used for:** Implementing combinational logic

### **E. Flip-Flops**
```
SR: Set-Reset (S=1 sets, R=1 resets)
JK: Like SR but J=K=1 toggles
D: Data (output = input)
T: Toggle (T=1 flips output)

REGISTER: Group of flip-flops
COUNTER: Register that counts
```

### **F. Logic Families**
```
TTL: Transistor-Transistor Logic
ECL: Emitter-Coupled Logic
CMOS: Uses depletion + enhancement MOSFETs ✓
NMOS/PMOS: Single type MOSFET
```

**STANDARD QUESTIONS:**
```
Q. Gray code conversion uses?
→ XOR operation

Q. PLA uses which gates?
→ AND + OR gates

Q. Which logic family uses both depletion & enhancement MOSFETs?
→ CMOS

Q. Accumulator register used for?
→ Arithmetic and logical operations

Q. ROM vs RAM difference?
→ ROM: permanent, RAM: temporary

Q. Data bus width measured in?
→ Bits
```

---

## 💻 **4. OPERATING SYSTEMS (7 Q) - Target 5/7**

### **A. Process Management**
```
PROCESS STATES:
New → Ready → Running → Waiting → Terminated

SCHEDULING ALGORITHMS (Just names):
- FCFS: First Come First Serve
- SJF: Shortest Job First
- Round Robin: Time quantum
- Priority Scheduling
```

### **B. Memory Management**
```
PAGING:
- Divide memory into fixed-size pages
- PAGE TABLE: Virtual → Physical address

SEGMENTATION:
- Divide by logical units (code, data, stack)

VIRTUAL MEMORY:
- Uses disk space as RAM extension
```

### **C. Deadlock**
```
4 CONDITIONS (All must be true):
1. Mutual Exclusion
2. Hold and Wait
3. No Preemption
4. Circular Wait
```

### **D. File Systems**
```
FAT: File Allocation Table
NTFS: New Technology File System
```

**STANDARD QUESTIONS:**
```
Q. Page table purpose?
→ Translate virtual to physical addresses

Q. Multiprogramming with fixed partitions issue?
→ Fragmentation

Q. Load control goal?
→ Even CPU time distribution

Q. Buffer cache used to?
→ Store frequently used files in memory

Q. I/O subsystem manages?
→ I/O operations between processes & devices
```

---

## 🗄️ **5. DBMS (7 Q) - Target 5/7**

### **A. Normalization (MOST IMPORTANT!)**
```
1NF: No repeating groups (atomic values only)
Example: {Phone: 123, 456} ❌ → Separate rows ✓

2NF: 1NF + No partial dependency
(Non-key attributes depend on FULL primary key)

3NF: 2NF + No transitive dependency
(Non-key attributes don't depend on other non-key)

BCNF: Every determinant is a candidate key
```

### **B. Keys**
```
PRIMARY KEY: Unique identifier (cannot be NULL)
FOREIGN KEY: References primary key of another table
CANDIDATE KEY: Can be primary key
SUPER KEY: Can identify uniquely (may have extra attributes)
```

### **C. Transactions (ACID)**
```
A - Atomicity: All or nothing
C - Consistency: Valid state to valid state
I - Isolation: Concurrent transactions don't interfere
D - Durability: Changes permanent after commit
```

### **D. Technology**
```
Q. Technology for transactional integrity?
→ LOCKS (not cursors/pointers/triggers)

Q. What is DBMS?
→ Stores, modifies, retrieves data
```

**STANDARD QUESTIONS:**
```
Q. What is DBMS?
→ System that stores, modifies, retrieves data

Q. Locks used for?
→ Maintain transactional integrity

Q. Specialization?
→ Top-down approach (entity divided into sub-entities)

Q. DFD stands for?
→ Data Flow Diagram

Q. NTFS stands for?
→ New Technology File System

Q. FAT stands for?
→ File Allocation Table
```

---

## 🌐 **6. COMPUTER NETWORKS (7 Q) - Target 5/7**

### **A. OSI vs TCP/IP Model**
```
OSI (7 LAYERS):
7. Application
6. Presentation  } → Application (TCP/IP)
5. Session       }
4. Transport     → Transport
3. Network       → Internet
2. Data Link     } → Network Access
1. Physical      }

REMEMBER: All People Seem To Need Data Processing
```

### **B. Protocols**
```
SMTP: Send email (Port 25)
HTTP: Web pages (Port 80)
HTTPS: Secure web (Port 443)
FTP: File transfer (Port 21)
DNS: Domain to IP
ARP: IP to MAC address mapping ✓
TCP: Reliable, connection-oriented
UDP: Unreliable, connectionless
```

### **C. Transmission**
```
PARALLEL: Multiple pathways simultaneously ✓
SERIAL: One bit at a time
SIMPLEX: One direction only
HALF-DUPLEX: Both directions, not simultaneously
FULL-DUPLEX: Both directions simultaneously
```

### **D. Network Topologies**
```
Star, Ring, Bus, Mesh, Tree
NOT a topology: Disk ❌
```

**STANDARD QUESTIONS:**
```
Q. Primary function of routing?
→ Finding best path for data

Q. Socket in process communication?
→ Software interface for network communication

Q. Parallel transmission?
→ Multiple pathways simultaneously

Q. NOT a network topology?
→ Disk

Q. Contention-based MAC used in?
→ Ethernet networks

Q. Routing involves?
→ Determining best path for data packets

Q. ARP purpose?
→ Map MAC addresses to IP addresses
```

---

## 🧬 **7. THEORY OF COMPUTATION (6 Q) - STANDARD FORMULAS**

### **A. DFA/NFA Conversion**
```
NFA with n states → DFA with MAX 2^n states

Example: NFA with 5 states → DFA max 2^5 = 32 states
Given: NFA 5 states (excluding initial) → 6 total
Answer: 2^6 = 64 states ✓
```

### **B. Regular Languages**
```
DFA exists = Regular Language ✓
Language with DFA = Regular Language
```

### **C. String Operations**
```
Identity element: ε (epsilon/empty string)
String: u='1101', v='0001'
uv = 11010001
vu = 00011101
Identity: ε (no change when concatenated)
```

### **D. Minimum States for DFA**
```
String ends with 101:
Need states to remember last 2 digits
Minimum states = 3 (but answer says 2 - check pattern!)

For "divisible by 3":
Remainders possible: 0, 1, 2
So answer: 0,1,2 ✓
```

### **E. CFG Property**
```
NOT closed under: Intersection ✓
Closed under: Union, Concatenation
```

**STANDARD QUESTIONS:**
```
Q. NFA of 5 states → DFA max states?
→ 2^5 = 32 or 2^6 = 64 (check total states)

Q. Language with DFA?
→ Regular Language

Q. Identity element for strings?
→ ε (epsilon)

Q. DFA for divisible by 3, remainders?
→ 0, 1, 2

Q. Minimum states for "ends with 101"?
→ Usually 4, but check options (could be 2)

Q. CFG NOT closed under?
→ Intersection (given as "Repeated Concatenation" in options)
```

---

## 🤖 **8. AI, IoT, E-COMMERCE (20 Q) - QUICK DEFINITIONS**

### **A. AI**
```
Q. Father of AI? → John McCarthy ✓
Q. AI programming language? → LISP, Prolog (Answer: Perl? Check!)
Q. Game tree algorithm? → Min/Max algorithm ✓
Q. Uniform-cost search expands? → Lowest path cost ✓
Q. Removing detail from state? → Abstraction ✓
Q. First order predicate logic contains? → Predicate + Subject ✓
Q. Improve AI agent performance? → Learning ✓
```

### **B. IoT**
```
Q. NOT true about IoT? → IoT is fully safe ❌
Q. Light sensor type? → Analog ✓
Q. Microphone? → Digital sensor (Answer says analog? Check!)
Q. BLE stands for? → Bluetooth Low Energy ✓
Q. WSN stands for? → Wireless Sensor Protocol ✓
Q. Complex SCADA levels? → 4 ✓
Q. MISO pin in RFID? → Master In Slave Out ✓
```

### **C. E-Commerce**
```
Q. Four main types? → B2B, B2C, C2B, C2C (All of above) ✓
Q. Reverse auction? → Sellers compete, buyers post needs ✓
Q. New entrant threat if easy entry? → High ✓
Q. Creating tailored products? → Customization ✓
Q. E-marketplace same industry? → Vertical ✓
Q. Secure Sockets Layer does? → All (creates secure connection, encrypts, sends) ✓
```

### **D. Multimedia**
```
Q. Stream playback delay? → Jitter ✓
Q. Real-time jitter introduced by delay between? → Packets ✓
Q. Voice sampling? → 8 bits per sample ✓
Q. Audio compression for? → Speech or music ✓
Q. Each represents color? → Pixel value ✓
Q. Pictorial presentation? → Animations ✓
```

---

## 👨‍🏫 **9. OOP CONCEPTS (7 Q) - Target 5/7**
```
Q. Keyword to create instance? → new ✓
Q. Abstract class? → Cannot be instantiated ✓
Q. 'super' keyword? → Refers to superclass ✓
Q. Class definition? → Blueprint for objects ✓
Q. Information hiding principle? → Information hiding ✓
Q. Main purpose of inheritance? → Parent-child relationship ✓
Q. Abstract methods? → Methods without body, in abstract class ✓
```

---

## 🌐 **10. WEB TECHNOLOGIES (7 Q) - Quick Facts**
```
Q. SMTP protocol for? → Sending emails ✓
Q. CSS stands for? → Cascading Style Sheets ✓
Q. jQuery? → Simplifies JavaScript tasks ✓
Q. AJAX stands for? → Asynchronous JavaScript and XML ✓
Q. DOM tree hierarchy? → Parent-child relationship ✓
Q. XML unique identifier attribute? → id ✓
```

---

## 🛠️ **11. SOFTWARE ENGINEERING (7 Q) - Basic Only**
```
Q. Iterative + risk analysis model? → Spiral model ✓
Q. Software quality assurance goal? → Establish standards/processes ✓
Q. Reverse engineering for? → Understanding existing software ✓
Q. Unit testing? → Testing individual components ✓
Q. System testing goal? → Test from user's perspective ✓
Q. Size estimation metric? → Function Points (FP) ✓
Q. Staffing level estimation? → Identify risks (Putnam's model) ✓
```

---

## 🧮 **12. OTHER SKILLS (20 MARKS) - Quick Prep**

### **A. General Knowledge (Sample Topics)**
```
- Champaran Satyagraha: NOT related - Jai Prakash Narayan ✓
- Santhals revolt: NOT in 1820s ✓
- Sun rise time difference: About 7:00 AM (IST difference)
- FDI limit in Indian company: 10% ✓
- Visva-Bharati University: West Bengal ✓
```

### **B. Environmental Science**
```
- Rama playing cricket energy: Muscular energy ✓
- Burning fuels gives: Heat + light energy ✓
```

### **C. Mathematical Aptitude**
```
- Missing number: 1,6,15,__,45,66,91 → 28 ✓
- Whole number operations: 100+x, 100-x → Sum = 200 ✓
- Odd terms sum: 5-5+5-5+... → 5 ✓
- Descending order: 10.5, 1.50, 1.055, 1.05... ✓
```

### **D. Logical Reasoning**
```
- Monday:April :: Friday:? → August ✓
- Least like: Kidney, Heart, Lung, Ear → Heart ✓
- Sequence: 60,30,120,15,240,? → 7.5 ✓
- BAD=YZW, SAID=HZRW, LIFE=? → ORUV ✓
- Relation: "I'm only son of her mother's son" → Aunt ✓
