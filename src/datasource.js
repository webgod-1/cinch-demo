export let phaseData = [
  {
    PhaseId: 1,
    Name: "Phase 1",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 15000,
    Consultant: 500,
    Expense: 150,
    Status: true,
    FeeType: "Fixed",
  },
  {
    PhaseId: 2,
    Name: "Phase 2",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 5000,
    Consultant: 100,
    Expense: 0,
    Status: false,
    FeeType: "Fixed",
  },
  {
    PhaseId: 3,
    Name: "Phase 3",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 0,
    Consultant: 0,
    Expense: 0,
    Status: true,
    FeeType: "Hourly",
  },
  {
    PhaseId: 4,
    Name: "Phase 4",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 5000,
    Consultant: 100,
    Expense: 0,
    Status: true,
    FeeType: "",
  },
];

export let taskData = [
  {
    TaskId: 1,
    PhaseId: 1,
    ResourceId: "Phase1Task1",
    Name: "Task 1",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 7500,
    Consultant: 250,
    Expense: 75,
    Status: true,
    FeeType: "Fixed",
  },
  {
    TaskId: 2,
    PhaseId: 1,
    ResourceId: "Phase1Task2",
    Name: "Task 2",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 7500,
    Consultant: 250,
    Expense: 75,
    Status: true,
    FeeType: "Fixed",
  },
  {
    TaskId: 3,
    PhaseId: 2,
    ResourceId: "Phase2Task1",
    Name: "Task 2",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 2500,
    Consultant: 50,
    Expense: 0,
    Status: true,
    FeeType: "Fixed",
  },
  {
    TaskId: 4,
    PhaseId: 2,
    ResourceId: "Phase2Task2",
    Name: "Task 2",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 2500,
    Consultant: 50,
    Expense: 0,
    Status: false,
    FeeType: "Fixed",
  },
  {
    TaskId: 5,
    PhaseId: 3,
    ResourceId: "Phase3Task1",
    Name: "Task 1",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 0,
    Consultant: 0,
    Expense: 0,
    Status: true,
    FeeType: "Hourly",
  },
  {
    TaskId: 6,
    PhaseId: 3,
    ResourceId: "Phase3Task2",
    Name: "Task 2",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 0,
    Consultant: 0,
    Expense: 0,
    Status: false,
    FeeType: "Hourly",
  },
  {
    TaskId: 7,
    PhaseId: 4,
    ResourceId: "Phase4Task1",
    Name: "Task 2",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 2500,
    Consultant: 50,
    Expense: 0,
    Status: true,
    FeeType: "",
  },
  {
    TaskId: 8,
    PhaseId: 4,
    ResourceId: "Phase4Task2",
    Name: "Task 2",
    StartDate: new Date("07/08/2019"),
    EndDate: new Date("09/21/2019"),
    BudgetsHrs: 167,
    Labour: 2500,
    Consultant: 50,
    Expense: 0,
    Status: true,
    FeeType: "",
  },
];

export let resourceData = [
  {
    ResourceId: "Phase1Task1",
    Resource: "Callum Bruce",
    JTD: "5Hrs/$750",
    ETC: "28Hrs/XXX",
    Week1: "4Hrs/$600",
    Week2: "4Hrs/$600",
    Week3: "4Hrs/$600",
    Week4: "4Hrs/$600",
    Week5: "4Hrs/$600",
    Week6: "4Hrs/$600",
    Week7: "4Hrs/$600",
  },
  {
    ResourceId: "Phase1Task1",
    Resource: "Director",
    JTD: "JTD",
    ETC: "ETC",
    Week1: "4Hrs/$800",
    Week2: "4Hrs/$800",
    Week3: "4Hrs/$800",
    Week4: "4Hrs/$800",
    Week5: "4Hrs/$800",
    Week6: "4Hrs/$800",
    Week7: "4Hrs/$800",
  },
  {
    ResourceId: "Phase1Task2",
    Resource: "Callum Bruce",
    JTD: "5Hrs/$700",
    ETC: "26Hrs/XXX",
    Week1: "5Hrs/$600",
    Week2: "5Hrs/$600",
    Week3: "5Hrs/$600",
    Week4: "5Hrs/$600",
    Week5: "5Hrs/$600",
    Week6: "5Hrs/$600",
    Week7: "5Hrs/$600",
  },
  {
    ResourceId: "Phase1Task2",
    Resource: "Director",
    JTD: "JTD",
    ETC: "ETC",
    Week1: "5Hrs/$800",
    Week2: "5Hrs/$800",
    Week3: "5Hrs/$800",
    Week4: "5Hrs/$800",
    Week5: "5Hrs/$800",
    Week6: "5Hrs/$800",
    Week7: "5Hrs/$800",
  },
  {
    ResourceId: "Phase2Task1",
    Resource: "Callum Bruce",
    JTD: "5Hrs/$750",
    ETC: "28Hrs/XXX",
    Week1: "6Hrs/$600",
    Week2: "6Hrs/$600",
    Week3: "6Hrs/$600",
    Week4: "6Hrs/$600",
    Week5: "6Hrs/$600",
    Week6: "6Hrs/$600",
    Week7: "6Hrs/$600",
  },
  {
    ResourceId: "Phase2Task1",
    Resource: "Director",
    JTD: "JTD",
    ETC: "ETC",
    Week1: "6Hrs/$800",
    Week2: "6Hrs/$800",
    Week3: "6Hrs/$800",
    Week4: "6Hrs/$800",
    Week5: "6Hrs/$800",
    Week6: "6Hrs/$800",
    Week7: "6Hrs/$800",
  },
  {
    ResourceId: "Phase2Task2",
    Resource: "Callum Bruce",
    JTD: "5Hrs/$750",
    ETC: "28Hrs/XXX",
    Week1: "7Hrs/$600",
    Week2: "7Hrs/$600",
    Week3: "7Hrs/$600",
    Week4: "7Hrs/$600",
    Week5: "7Hrs/$600",
    Week6: "7Hrs/$600",
    Week7: "7Hrs/$600",
  },
  {
    ResourceId: "Phase2Task2",
    Resource: "Director",
    JTD: "JTD",
    ETC: "ETC",
    Week1: "7Hrs/$800",
    Week2: "7Hrs/$800",
    Week3: "7Hrs/$800",
    Week4: "7Hrs/$800",
    Week5: "7Hrs/$800",
    Week6: "7Hrs/$800",
    Week7: "7Hrs/$800",
  },
  {
    ResourceId: "Phase3Task1",
    Resource: "Callum Bruce",
    JTD: "5Hrs/$750",
    ETC: "28Hrs/XXX",
    Week1: "8Hrs/$600",
    Week2: "8Hrs/$600",
    Week3: "8Hrs/$600",
    Week4: "8Hrs/$600",
    Week5: "8Hrs/$600",
    Week6: "8Hrs/$600",
    Week7: "8Hrs/$600",
  },
  {
    ResourceId: "Phase3Task1",
    Resource: "Director",
    JTD: "JTD",
    ETC: "ETC",
    Week1: "8Hrs/$800",
    Week2: "8Hrs/$800",
    Week3: "8Hrs/$800",
    Week4: "8Hrs/$800",
    Week5: "8Hrs/$800",
    Week6: "8Hrs/$800",
    Week7: "8Hrs/$800",
  },
  {
    ResourceId: "Phase3Task2",
    Resource: "Callum Bruce",
    JTD: "5Hrs/$750",
    ETC: "28Hrs/XXX",
    Week1: "8Hrs/$600",
    Week2: "8Hrs/$600",
    Week3: "8Hrs/$600",
    Week4: "8Hrs/$600",
    Week5: "8Hrs/$600",
    Week6: "8Hrs/$600",
    Week7: "8Hrs/$600",
  },
  {
    ResourceId: "Phase3Task2",
    Resource: "Director",
    JTD: "JTD",
    ETC: "ETC",
    Week1: "8Hrs/$800",
    Week2: "8Hrs/$800",
    Week3: "8Hrs/$800",
    Week4: "8Hrs/$800",
    Week5: "8Hrs/$800",
    Week6: "8Hrs/$800",
    Week7: "8Hrs/$800",
  },
  {
    ResourceId: "Phase4Task1",
    Resource: "Callum Bruce",
    JTD: "5Hrs/$750",
    ETC: "28Hrs/XXX",
    Week1: "8Hrs/$600",
    Week2: "8Hrs/$600",
    Week3: "8Hrs/$600",
    Week4: "8Hrs/$600",
    Week5: "8Hrs/$600",
    Week6: "8Hrs/$600",
    Week7: "8Hrs/$600",
  },
  {
    ResourceId: "Phase4Task1",
    Resource: "Director",
    JTD: "JTD",
    ETC: "ETC",
    Week1: "8Hrs/$800",
    Week2: "8Hrs/$800",
    Week3: "8Hrs/$800",
    Week4: "8Hrs/$800",
    Week5: "8Hrs/$800",
    Week6: "8Hrs/$800",
    Week7: "8Hrs/$800",
  },
  {
    ResourceId: "Phase4Task2",
    Resource: "Callum Bruce",
    JTD: "5Hrs/$750",
    ETC: "28Hrs/XXX",
    Week1: "8Hrs/$600",
    Week2: "8Hrs/$600",
    Week3: "8Hrs/$600",
    Week4: "8Hrs/$600",
    Week5: "8Hrs/$600",
    Week6: "8Hrs/$600",
    Week7: "8Hrs/$600",
  },
  {
    ResourceId: "Phase4Task2",
    Resource: "Director",
    JTD: "JTD",
    ETC: "ETC",
    Week1: "8Hrs/$800",
    Week2: "8Hrs/$800",
    Week3: "8Hrs/$800",
    Week4: "8Hrs/$800",
    Week5: "8Hrs/$800",
    Week6: "8Hrs/$800",
    Week7: "8Hrs/$800",
  },
];
