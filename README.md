### 字符串匹配

####单模式串匹配

##### BF(Brute Force)算法

##### RK(Rabin-Krap)算法

RK 算法的思路：通过哈希算法对主串中的 n-m+1 个子串分别求哈希值，然后逐个与模式串的哈希值比较大小。如果某个子串的哈希值与模式串相等，那就说明对应的子串和模式串匹配了（这里先不考虑哈希冲突的问题，后面我们会讲到）。因为哈希值是一个数字，数字之间比较是否相等是非常快速的，所以模式串和子串比较的效率就提高了。

RK算法复杂度(O(n))：哈希计算(O(n))和主串与模式串的哈希比较(O(n-m+1))。

##### BM(Boyer-Moore)算法

上述的两种算法算法是将模式串向后移动一位，BM算法的核心思想是一次将模式串向后移动多位。

