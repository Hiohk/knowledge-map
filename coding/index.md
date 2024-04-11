<!-- ---
title: 刷题
layout: page
--- -->

# Coding For LeetCode

## 1. 两数之和 <Badge type="tip" text="简单" />

### 题目

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。你可以按任意顺序返回答案。

#### 示例 1

> 输入：nums = [2,7,11,15], target = 9
> 输出：[0,1]
> 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

#### 示例 2

> 输入：nums = [3,2,4], target = 6
> 输出：[1,2]
> 示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]

#### 提示

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- 只会存在一个有效答案

### 代码

::: code-group

```Java [Java]
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[0];
    }
}
```

```JavaScript [JavaScript]
var twoSum = function(nums, target) {
    for(let i = 0, len = nums.length;i < len;i++){
        // 因为同一元素不允许重复出现，所以从i的下一位开始遍历
        for(let j = i + 1;j < len;j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // 所有样例都是有返回结果的，这里无所谓
    return [-1, -1];
};

```

:::

### 解题思路

1. 暴力枚举

最容易想到的方法是枚举数组中的每一个数 x，寻找数组中是否存在 target - x。
当我们使用遍历整个数组的方式寻找 target - x 时，需要注意到每一个位于 x 之前的元素都已经和 x 匹配过，因此不需要再进行匹配。而每一个元素不能被使用两次，所以我们只需要在 x 后面的元素中寻找 target - x。

复杂度分析：时间复杂度：$O(N^2)$，空间复杂度：$O(1)$。
