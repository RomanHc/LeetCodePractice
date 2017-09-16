Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**

	Given nums = [2, 7, 11, 15], target = 9,
	
	Because nums[0] + nums[1] = 2 + 7 = 9,
	return [0, 1].


**Code:**
```
#include<iostream>
#include<vector>
#include<unordered_map>
using namespace std;

vector<int> twoSum(vector<int> &numbers, int target)
{
	unordered_map<int, int> map;
	vector<int> result;
	for (int i = 0; i < numbers.size(); i++) {
		int otherNum = target - numbers[i];
		if (map.find(otherNum) != map.end()) {
			result.push_back(map[otherNum]);
			result.push_back(i);			
			return result;
		}
		map[numbers[i]] = i;
	}
	return result;
}

int main()
{
	vector<int> nums= {2,7,11,15};
	vector<int> result = TwoSum(nums,9);
	if (result.size() !=0)
	{
		cout << result[0] <<","<< result[1] << endl;
	}
	else {
		cout << "Don't find." << endl;
	}
}
```
