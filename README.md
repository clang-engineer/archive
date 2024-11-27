# Quartz Scheduler
- 유연하고 확장 가능한 Job 스케줄링을 위한 라이브러리

# Quartz의 주요 구성요소
- Scheduler: Job과 Trigger를 등록하고 작업을 실행하는 주체
- JobDetail: Job을 실행하기 위한 정보를 가지고 있는 객체
- Trigger: Job 실행 조건 및 시점을 정의하는 객체
- Job: 작업의 실제 실행 로직. Job 인터페이스를 구현하여 작성
- JobDataMap: JobDetail과 Trigger에 데이터를 전달하기 위한 객체

# Quartz의 사용 흐름
1. Job 정의: Job 인터페이스를 구현하여 Job을 정의
2. JobDetail 생성: Job을 실행하기 위한 정보를 가지고 있는 JobDetail 객체 생성
3. Trigger 생성: Job을 실행할 시점을 정의하는 Trigger 객체 생성
4. Scheduler에 등록: JobDetail과 Trigger를 Scheduler에 등록

```java
 // 1. Job 정의
public class QueryJob implements Job {
  @Override
  public void execute(JobExecutionContext context) throws JobExecutionException {
    String query = context.getMergedJobDataMap().getString("query");
    System.out.println("Executing query: " + query);
    // 여기에 쿼리 실행 로직 추가
  }
}

// 2. JobDetail 생성
JobDetail jobDetail = JobBuilder.newJob(QueryJob.class)
  .withIdentity("myJob", "group1")
  .usingJobData("query", "SELECT * FROM users")
  .build();

// 3. Trigger 생성
Trigger trigger = TriggerBuilder.newTrigger()
  .forJob(jobDetail)
  .withIdentity("myTrigger", "group1")
  .withSchedule(CronScheduleBuilder.cronSchedule("0 0/5 * * * ?"))
  .build();

 // 4. Scheduler 등록
SchedulerFactory schedulerFactory = new StdSchedulerFactory();
Scheduler scheduler = schedulerFactory.getScheduler();
scheduler.start();
scheduler.scheduleJob(jobDetail, trigger);
```