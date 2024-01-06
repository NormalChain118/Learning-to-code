#include <iostream>
#include <string>
using namespace std;

double Calculator(string str) {
    int operatorPosition = str.find_first_of("+-*/");
    string N1 = str.substr(operatorPosition - 1),  N2 = str.substr(operatorPosition + 1);
    double y = stod(N2), x = stod(N1);
    if(str[operatorPosition] == '+') {
        return x + y;
    } else if (str[operatorPosition] == '-') {
        return x - y;
    } else if (str[operatorPosition] == '*') {
        return x * y;
    } else {
        return x / y;
    }
}

int main() {
    cout << "Note: You must re-run the code to put in a new statement" << endl;
    cout << "Type your equartion:" << endl;
    string inputEquation;
    cin >> inputEquation;
    cout << Calculator(inputEquation);
}
